import CardSliderShimmer from "@/components/elements/shimmer/card-slider-shimmer";
import TitleSection from "@/components/elements/title-section";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../../elements/card";
import Container from "../container";

const CardSlider = ({
  data,
  title,
  subtitle,
  href,
  actionTitle,
  type,
  isLoading,
}) => {
  return (
    <Container>
      <TitleSection
        title={title}
        subtitle={subtitle}
        href={href}
        actionTitle={actionTitle}
      />

      {isLoading ? (
        <CardSliderShimmer />
      ) : (
        <Swiper
          spaceBetween={20}
          slidesPerView="auto"
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          {data?.map((destination) => (
            <SwiperSlide
              key={destination?._id}
              className="group max-w-[80%] md:max-w-full"
            >
              <Card
                type={type}
                title={destination?.title}
                id={destination?._id}
                image_url={destination?.image_url}
                slug={destination?.slug}
                minimum_pax={destination?.minimum_pax}
                price={destination?.price}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </Container>
  );
};

export default CardSlider;
