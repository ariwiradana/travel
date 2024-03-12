import CardSlider from "@/components/molecules/card-slider";
import Hero from "@/components/molecules/hero";
import React from "react";
import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import ReviewSection from "@/components/molecules/review-section";

const HomeComponent = () => {
  const { data: tours, isLoading: isLoadingTours } = useSWR(
    "/api/destination?limit=3",
    fetcher
  );
  const { data: services, isLoading: isLoadingServices } = useSWR(
    "/api/transport?limit=3",
    fetcher
  );

  return (
    <>
      <Hero />
      <div className="flex flex-col gap-y-12 lg:gap-y-20 py-10 lg:py-20">
        <CardSlider
          isLoading={isLoadingTours}
          actionTitle="All Tours"
          href="/tours"
          data={tours}
          title="Tour Packages"
          subtitle="Popular Tour Packages"
          type="tours"
        />
        <CardSlider
          actionTitle="All Services"
          href="/services"
          isLoading={isLoadingServices}
          data={services}
          title="Transport Services"
          subtitle="Airport Pickup / Drop Off / Tour"
          type="services"
        />
        <ReviewSection />
      </div>
    </>
  );
};

export default HomeComponent;
