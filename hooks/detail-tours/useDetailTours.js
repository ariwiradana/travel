import fetcher from "@/lib/fetcher";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import useScreenSize from "../screen/useScreenSize";

const useDetailTours = (slug) => {
  const { data, isLoading } = useSWR(`/api/destination/${slug}`, fetcher);

  const [previewImages, setPreviewImages] = useState([]);
  const [allImages, setAllImages] = useState([]);

  const { screen } = useScreenSize();

  useEffect(() => {
    if (data?.images) {
      if (data?.images?.length > 4) {
        if (screen?.mobile) {
          setPreviewImages(data?.images?.slice(0, 3));
        } else {
          setPreviewImages(data?.images?.slice(0, 4));
        }
      }
      setAllImages(data?.images);
    }
  }, [data, screen]);

  return { previewImages, allImages, isLoading, data };
};

export default useDetailTours;
