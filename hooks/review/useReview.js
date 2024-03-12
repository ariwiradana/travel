import client from "@/lib/axios";
import moment from "moment";
import React, { useRef, useState } from "react";

const useReview = (onCloseModal, mutate) => {
  const [values, setValues] = useState({
    name: "",
    rating: 5,
    review: "",
    created_at: moment(),
  });
  const reviewFormRef = useRef(null);

  const handleChange = (name, value) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    client
      .post("/api/review", values)
      .then(() => mutate())
      .finally(() => onCloseModal());
  };

  return {
    values,
    reviewFormRef,
    handleSubmit,
    handleChange,
  };
};

export default useReview;
