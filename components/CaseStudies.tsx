import React from "react";
import { SectionHeader } from "@/components";
import { caseStudiesList, sectionList } from "@/constants";

const CaseStudies = () => {
  return (
    <section className="mb-36">
      <SectionHeader
        title={sectionList[1].title}
        description={sectionList[1].description}
      />
      {/* For Desktop */}
      <div className="mt-20 p-14 bg-black text-white rounded-custom hidden sm:grid grid-cols-1 sm:grid-cols-3">
        {caseStudiesList.map((item) => {
          return (
            <div className="flex flex-col gap-5 w-full pr-10 last:pr-0 pl-10 pr first:pl-0 border-r border-white last:border-r-0">
              <p>{item}</p>
              <div>
                <a href="#" className="text-themeGreen flex gap-4">
                  Learn More
                  <img src="/positivus_arrow_icon.svg" alt="arrow icon" />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* For Mobile */}
      <div className="mt-20 flex overflow-auto sm:hidden gap-5">
        {caseStudiesList.map((item) => {
          return (
            <div className="w-full flex-[0_0_90%]">
              <div className="bg-black text-white rounded-custom p-12 flex flex-col gap-5 w-full">
                <p>{item}</p>
                <div>
                  <a href="#" className="text-themeGreen flex gap-4">
                    Learn More
                    <img src="/positivus_arrow_icon.svg" alt="arrow icon" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CaseStudies;
