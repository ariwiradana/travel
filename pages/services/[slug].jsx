import Layout from "@/components/molecules/layout";
import DetailSerices from "@/components/partials/services/detail";
import React from "react";

const ServicesSlug = ({ slug }) => {
  return (
    <Layout>
      <DetailSerices slug={slug} />
    </Layout>
  );
};

export default ServicesSlug;

export const getServerSideProps = async ({ params }) => {
  const slug = params.slug;
  return {
    props: {
      slug,
    },
  };
};
