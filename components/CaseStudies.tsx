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
      <div className="mt-20 p-14 bg-black text-white rounded-custom grid grid-cols-1 sm:grid-cols-3 divide-x">
        {caseStudiesList.map((item) => {
          return (
            <div className="flex flex-col gap-5 w-full first:pr-10 pl-10 first:pl-0">
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
    </section>
  );
};

export default CaseStudies;
