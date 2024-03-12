import ButtonFillDark from "@/components/elements/button/button-fill-dark";
import InputRating from "@/components/elements/input-rating";
import InputText from "@/components/elements/input-text";
import InputTextarea from "@/components/elements/input-textarea";
import useReview from "@/hooks/review/useReview";
import useScreenSize from "@/hooks/screen/useScreenSize";
import React from "react";

const ModalReviewContent = ({ onCloseModal, mutate }) => {
  const { screen } = useScreenSize();
  const { values, reviewFormRef, handleChange, handleSubmit } = useReview(
    onCloseModal,
    mutate
  );

  return (
    <div className="md:py-2 p-4 md:px-1">
      <h4 className="font-raleway font-semibold text-xl lg:text-2xl mb-3 lg:mb-4 md:hidden">
        Write a review
      </h4>
      <form
        onSubmit={(e) => handleSubmit(e)}
        ref={reviewFormRef}
        className="flex flex-col gap-y-4"
      >
        <InputRating
          onChange={(_, value) => handleChange("rating", value)}
          value={values?.rating}
          size={screen?.mobile ? "medium" : "large"}
        />
        <InputText
          onChange={(e) => handleChange("name", e.target.value)}
          value={values?.name}
          placeholder="Name"
        />
        <InputTextarea
          value={values?.review}
          onChange={(e) => handleChange("review", e.target.value)}
          placeholder="Review"
        />
        <div className="flex justify-end">
          <ButtonFillDark type="submit" full={screen?.mobile} title="Send" />
        </div>
      </form>
    </div>
  );
};

export default ModalReviewContent;
