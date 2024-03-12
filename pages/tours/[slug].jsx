import Layout from "@/components/molecules/layout";
import DetailTour from "@/components/partials/tours/detail";
import React from "react";

const ToursSlug = ({ slug }) => {
  return (
    <Layout>
      <DetailTour slug={slug} />
    </Layout>
  );
};

export default ToursSlug;

export const getServerSideProps = async ({ params }) => {
  const slug = params.slug;
  return {
    props: {
      slug,
    },
  };
};
