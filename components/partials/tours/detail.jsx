import ButtonFillDark from "@/components/elements/button/button-fill-dark";
import Container from "@/components/molecules/container";
import { priceFormatterUSD } from "@/lib/formatter";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FiCheck } from "react-icons/fi";
import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import Head from "next/head";
import DetailGallery from "@/components/molecules/detail-gallery";
import useDetailTours from "@/hooks/detail-tours/useDetailTours";
import CustomModal from "@/components/elements/modal";
import useModal from "@/hooks/modal/useModal";
import ModalGalleryContent from "@/components/molecules/modal-gallery";
import Loader from "@/components/elements/loader";
import LightBoxGallery from "@/components/molecules/lightbox-gallery";
import useLightbox from "@/hooks/lightbox/useLightbox";

const DetailTour = ({ slug }) => {
  const { data: other } = useSWR(`/api/destination`, fetcher);
  const { data: contact } = useSWR("/api/contact", fetcher);
  const { previewImages, data, isLoading, allImages } = useDetailTours(slug);
  const { onOpenModal, onCloseModal, isOpen } = useModal();
  const { isOpenLightbox, onToggleLightbox, slide } = useLightbox();
  return (
    <>
      <Head>
        <title>{data?.title}</title>
      </Head>
      <CustomModal
        open={isOpen}
        onClose={onCloseModal}
        onOpen={onOpenModal}
        title="Experiences"
      >
        <ModalGalleryContent
          images={allImages}
          onToggleLightbox={onToggleLightbox}
        />
      </CustomModal>
      <LightBoxGallery
        open={isOpenLightbox}
        slide={slide}
        sources={allImages}
      />
      <div className="w-full lg:h-[50vh] md:h-[40vh] h-[36vh] relative">
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
            {isLoading ? (
              <div className="min-h-[70vh] md:min-h-[40vh] flex md:items-center">
                <Loader />
              </div>
            ) : (
              <>
                <h5 className="text-sm font-medium text-gray-500 uppercase mb-3">
                  Tour Package
                </h5>
                <h3 className="lg:text-4xl text-3xl font-raleway font-bold leading-8 lg:leading-[42px] text-black mb-4 lg:mb-8 lg:max-w-[90%]">
                  {data?.title}
                </h3>
                <div
                  className="text-base font-raleway text-justify font-medium text-app-black-500 mb-8 leading-6 lg:leading-8"
                  dangerouslySetInnerHTML={{
                    __html: data?.description,
                  }}
                ></div>
                <div className="flex flex-col flex-wrap gap-x-12 gap-y-6 lg:gap-y-8 divide-y divide-gray-200 border-t border-t-gray-200">
                  {data?.images && (
                    <div className="pt-8 pb-4">
                      <h4 className="font-raleway font-semibold text-2xl mb-3 lg:mb-4">
                        Experiences
                      </h4>
                      {previewImages?.length != 0 ? (
                        <div className="grid grid-cols-3 md:grid-cols-4 gap-1 rounded-lg overflow-hidden">
                          {previewImages?.map((image, index) => (
                            <DetailGallery
                              onClick={() => {
                                if (index == previewImages?.length - 1) {
                                  onOpenModal();
                                } else {
                                  onToggleLightbox(index + 1);
                                }
                              }}
                              key={`preview-${image}`}
                              slug={data?.slug}
                              image={image}
                              last={index == previewImages?.length - 1}
                            />
                          ))}
                        </div>
                      ) : (
                        <div className="grid grid-cols-3 md:grid-cols-4 gap-1 rounded-lg overflow-hidden">
                          {allImages?.map((image, index) => (
                            <DetailGallery
                              onClick={onToggleLightbox(index + 1)}
                              key={`all-${image}`}
                              slug={data?.slug}
                              image={image}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                  <Offer title="Where to go?" data={data?.destination} />
                  <Offer title="What's included?" data={data?.inclution} />
                  <Offer
                    title="Pax"
                    data={[`Minimum ${data?.minimum_pax} pax`]}
                  />
                </div>
                <div className="flex md:flex-row gap-y-4 flex-col items-start justify-between mt-8 border-t border-t-gray-200 pt-6">
                  <div className="flex gap-x-2 items-end">
                    <h2 className="lg:text-4xl text-3xl font-bold font-raleway">
                      {priceFormatterUSD(data?.price)}
                    </h2>
                    <p className="text-sm font-montserrat text-app-black-500">
                      / pax{" "}
                    </p>
                  </div>
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
              </>
            )}
          </div>
          {!isLoading && <OtherTours data={other} slug={slug} />}
        </div>
      </Container>
    </>
  );
};

export default DetailTour;

const Offer = ({ title, data }) => {
  return (
    <div className="pt-8">
      <h4 className="font-raleway font-semibold text-2xl mb-3 lg:mb-4">
        {title}
      </h4>
      <ul>
        {data?.map((label) => (
          <li
            key={`${title}-${label}`}
            className="text-base font-raleway font-medium text-app-black-500 leading-9 flex items-center gap-x-4"
          >
            <FiCheck />
            {label}
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
        Similliar Destination To Go
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
            key={destination?.slug}
            className="group max-w-[80%] lg:max-w-[45%] group transition-all ease-in-out duration-500"
          >
            <Link href={`/tours/${destination?.slug}`}>
              <div className="md:h-[16rem] h-[12rem] lg:h-[20rem] w-full relative rounded-xl bg-cover overflow-hidden">
                <Image
                  src={destination?.image_url}
                  alt={destination?.slug}
                  fill
                  className="object-cover"
                />
                <div className="absolute w-full top-0 left-0 h-full bg-gradient-to-b from-transparent p-5 md:p-6 to-gray-900 z-[2] flex flex-col justify-end">
                  <h4 className="text-white font-monserrat mb-2 text-[10px] lg:text-xs transform transition-all uppercase ease-in-out duration-500 lg:opacity-0 group-hover:opacity-100 group-hover:translate-y-0 lg:translate-y-6">
                    Tours
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
