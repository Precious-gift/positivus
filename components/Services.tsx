import React from "react";
import { CustomButton, SectionHeader, ServiceCard } from "@/components";
import { servicesList, sectionList } from "@/constants";

const Services = () => {
  return (
    <section className="mb-4">
      <SectionHeader
        title={sectionList[0].title}
        description={sectionList[0].description}
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
      <div className="mt-24 p-14 bg-gray-100 rounded-custom grid grid-cols-1 sm:grid-cols-5 gap-10 relative">
        <div className="flex flex-col gap-5 sm:col-span-3 w-full sm:w-5/6">
          <h2 className="font-black">Let's make things happen</h2>
          <p>
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <div>
            <CustomButton
              title="Get your free proposal"
              containerStyles="w-full sm:w-auto text-base"
            />
          </div>
        </div>
        <div className="w-full hidden sm:block sm:col-span-2">
          <img
            src="/positivus_free_proposal_img.svg"
            className="absolute top-1/2 -translate-y-1/2 w-1/4 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
