import { Rating } from "@mui/material";
import moment from "moment";
import React, { useState } from "react";

const ReviewCard = ({ review }) => {
  const [fullReview] = useState(review?.review);
  const [shortReview] = useState(
    review?.review.split(" ").slice(0, 30).join(" ")
  );
  const [more, setMore] = useState(false);

  return (
    <div className="p-6 rounded-2xl bg-white">
      <div className="flex justify-between items-center">
        <h5 className="text-black font-raleway font-bold text-base lg:text-lg">
          {review?.name}
        </h5>
        <p className="text-xs text-gray-500 font-montserrat">
          {moment(review?.created_at).fromNow()}
        </p>
      </div>
      <Rating
        className="-ml-1 my-2"
        name="read-only"
        value={review?.rating}
        size="medium"
        readOnly
      />
      <p className="font-montserrat text-app-black-500 text-sm lg:text-base">
        {more ? fullReview : shortReview}{" "}
        {fullReview?.split(" ").length > 30 && (
          <span>
            {!more && "..."}
            {!more && (
              <span
                className="font-montserrat font-semibold cursor-pointer"
                onClick={() => setMore(true)}
              >
                {" "}
                More
              </span>
            )}
          </span>
        )}
      </p>
    </div>
  );
};

export default ReviewCard;
