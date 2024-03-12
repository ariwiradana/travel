import TitleSection from "@/components/elements/title-section";
import CardGrid from "@/components/molecules/card-grid";
import Container from "@/components/molecules/container";
import fetcher from "@/lib/fetcher";
import React from "react";
import useSWR from "swr";

const ToursComponent = () => {
  const { data: tours, isLoading } = useSWR("/api/destination", fetcher);
  return (
    <Container className="mt-8 lg:mt-12">
      <TitleSection
        title="All Tour Packages"
        subtitle="All Tour Packages"
        className="mb-8"
      />
      <CardGrid isLoading={isLoading} type="tours" data={tours} />
    </Container>
  );
};

export default ToursComponent;
