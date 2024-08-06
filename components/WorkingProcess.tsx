import React from "react";
import { SectionHeader } from "@/components";
import { sectionList } from "@/constants";

const WorkingProcess = () => {
  return (
    <section className="mb-36">
      <SectionHeader
        title={sectionList[2].title}
        description={sectionList[2].description}
      />
    </section>
  );
};

export default WorkingProcess;
