import React from "react";
import Container from "../container";
import TitleSection from "@/components/elements/title-section";
import { Swiper, SwiperSlide } from "swiper/react";
import { HiOutlinePencilAlt } from "react-icons/hi";
import ReviewCard from "../review-card";
import CustomModal from "@/components/elements/modal";
import ModalReviewContent from "../modal-review";
import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import useModalReview from "@/hooks/modal/useModalReview";

const ReviewSection = () => {
  const { data: reviews, mutate } = useSWR("/api/review", fetcher);
  const { isOpen, onCloseModal, onOpenModal } = useModalReview();

  if (!reviews) return <></>;

  return (
    <Container className="bg-gray-50 py-8 lg:py-14">
      <CustomModal
        size
        open={isOpen}
        onClose={onCloseModal}
        onOpen={onOpenModal}
        title="Write a review"
      >
        <ModalReviewContent onCloseModal={onCloseModal} mutate={mutate} />
      </CustomModal>
      <TitleSection subtitle="What about us?" title="Customer Reviews" />
      <Swiper
        spaceBetween={20}
        slidesPerView="auto"
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {reviews?.map((review) => (
          <SwiperSlide
            key={review?._id}
            className="group max-w-[80%] md:max-w-full"
          >
            <ReviewCard review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        onClick={onOpenModal}
        className="flex mt-5 items-center gap-x-2 text-gray-800"
      >
        <HiOutlinePencilAlt className="text-lg" />
        <h6 className="font-montserrat font-medium text-sm">Write a review</h6>
      </button>
    </Container>
  );
};

export default ReviewSection;
