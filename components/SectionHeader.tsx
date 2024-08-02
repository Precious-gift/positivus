import { SectionHeaderProps } from "@/types";
import React from "react";

const SectionHeader = ({ title, description }: SectionHeaderProps) => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-8">
      <h2 className="w-auto text-2xl font-black px-2 py-2.5 rounded-lg bg-themeGreen">
        {title}
      </h2>
      <div className="w-full sm:w-6/12">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SectionHeader;
