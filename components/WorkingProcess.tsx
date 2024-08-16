import React from "react";
import { ProcessCard, SectionHeader } from "@/components";
import { processList, sectionList } from "@/constants";

const WorkingProcess = () => {
  return (
    <section className="mb-36">
      <SectionHeader
        title={sectionList[2].title}
        description={sectionList[2].description}
      />

      <div className="mt-20 grid grid-cols-1 gap-10">
        {processList.map((process) => (
          <ProcessCard key={process.id} {...process} />
        ))}
      </div>
    </section>
  );
};

export default WorkingProcess;
