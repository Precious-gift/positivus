import React from "react";
import { SectionHeader, ServiceCard } from "@/components";
import { servicesInfo, servicesList } from "@/constants";

const Services = () => {
  return (
    <section className="mb-4">
      <SectionHeader
        title={servicesInfo.title}
        description={servicesInfo.description}
      />
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-10">
        {servicesList.map((service) => (
          <ServiceCard
            title={service.title}
            cardClass={service.cardClass}
            arrowIconUrl={service.arrowIconUrl}
            cardImageUrl={service.cardImageUrl}
          ></ServiceCard>
        ))}
      </div>
    </section>
  );
};

export default Services;
