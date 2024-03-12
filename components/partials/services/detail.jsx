import ButtonFillDark from "@/components/elements/button/button-fill-dark";
import Container from "@/components/molecules/container";
import { priceFormatterIDR, priceFormatterUSD } from "@/lib/formatter";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FiCheck } from "react-icons/fi";
import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import Head from "next/head";

const DetailSerices = ({ slug }) => {
  const { data, isLoading } = useSWR(`/api/transport/${slug}`, fetcher);
  const { data: other } = useSWR(`/api/transport`, fetcher);
  const { data: contact } = useSWR("/api/contact", fetcher);

  return (
    <>
      <Head>
        <title>{data?.title}</title>
      </Head>
      <div className="w-full h-[16rem] md:h-[28rem] relative">
        {isLoading ? (
          <div className="w-full h-full bg-gray-200 animate-pulse"></div>
        ) : (
          <>
            <div className="w-full absolute top-0 left-0 h-full bg-black z-[1] bg-opacity-30 transition-all ease-in-out duration-500 hover:bg-opacity-0"></div>
            <Image
              src={data?.image_url}
              alt={data?.slug}
              fill
              className="object-cover"
            />
          </>
        )}
      </div>
      <Container className="relative z-[2] ">
        <div>
          <div className="md:-mt-[8rem] bg-white py-6 md:p-10 rounded-2xl lg:max-w-[70%]">
            <h5 className="text-xs font-medium text-gray-500 uppercase mb-3">
              Transport Services
            </h5>
            <h3 className="lg:text-4xl text-3xl font-raleway font-bold text-black mb-6 max-w-[90%]">
              {data?.title}
            </h3>
            <p className="text-sm font-raleway font-medium text-app-black-500 mb-6 leading-7">
              {data?.description}
            </p>
            <div className="flex flex-col flex-wrap gap-x-12 gap-y-6 lg:gap-y-8 divide-y divide-gray-200">
              {data?.destination?.length != 0 && (
                <Offer title="Where to go?" data={data?.destination} />
              )}
            </div>
            <div className="flex md:flex-row gap-y-4 flex-col items-start justify-between mt-8 border-t border-t-gray-200 pt-6">
              {data?.price?.from == data?.price?.to && (
                <div className="flex gap-x-2 items-end">
                  <h2 className="lg:text-4xl text-2xl font-bold font-raleway">
                    {priceFormatterIDR(data?.price?.from)}
                  </h2>
                </div>
              )}
              {contact && (
                <Link
                  target="_blank"
                  href={`https://wa.me/${contact?.phone}`}
                  className="w-full md:w-auto"
                >
                  <ButtonFillDark size="lg" title="Book Now" full />
                </Link>
              )}
            </div>
          </div>
          <OtherTours data={other} slug={slug} />
        </div>
      </Container>
    </>
  );
};

export default DetailSerices;

const Offer = ({ title, data }) => {
  return (
    <div className="pt-8">
      <h4 className="font-raleway font-semibold text-2xl mb-3 lg:mb-4">
        {title}
      </h4>
      <ul className="flex flex-col gap-y-4">
        {data?.map(({ title, price }) => (
          <li
            key={`service-${title}-${price}`}
            className="text-base font-raleway font-medium text-app-black-500 leading-6 flex gap-x-6"
          >
            <FiCheck className="lg:mt-[10px] mt-1" />
            <div>
              {title}
              <h5 className="font-montserrat font-semibold text-black leading-6">
                {priceFormatterIDR(price)}
              </h5>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const OtherTours = ({ data, slug }) => {
  const newData = data?.filter((el) => el?.slug != slug);
  return (
    <div className="lg:p-10 mt-4 pt-8 lg:pt-0 lg:mt-20 border-t border-t-gray-200 lg:border-t-transparent lg:max-w-[80%]">
      <h4 className="font-montserrat font-bold text-xl mb-4">
        Other Transport Services
      </h4>
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        spaceBetween={20}
        slidesPerView="auto"
        className="w-full"
        modules={[Autoplay]}
      >
        {newData?.map((destination) => (
          <SwiperSlide
            key={`destination-${destination?.slug}`}
            className="group max-w-[80%] lg:max-w-[45%] group transition-all ease-in-out duration-500"
          >
            <Link href={`/services/${destination?.slug}`}>
              <div className="md:h-[16rem] h-[12rem] lg:h-[20rem] w-full relative rounded-xl bg-cover overflow-hidden">
                <Image
                  src={destination?.image_url}
                  alt={destination?.slug}
                  fill
                  className="object-cover"
                />
                <div className="absolute w-full top-0 left-0 h-full bg-gradient-to-b from-transparent p-5 md:p-6 to-gray-900 z-[2] flex flex-col justify-end">
                  <h4 className="text-white font-monserrat mb-2 text-[10px] lg:text-xs transform transition-all uppercase ease-in-out duration-500 lg:opacity-0 group-hover:opacity-100 group-hover:translate-y-0 lg:translate-y-6">
                    Services
                  </h4>
                  <h4 className="text-white font-semibold font-raleway text-lg lg:text-xl transform transition-all line-clamp-2 ease-in-out duration-500 delay-100 lg:opacity-0 group-hover:opacity-100 leading-6 group-hover:translate-y-0 lg:translate-y-6">
                    {destination?.title}
                  </h4>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
