import React from "react";
import SectionHeader from "./SectionHeader";
import { sectionList, teamList } from "@/constants";
import TeamCard from "@/components/TeamCard";
import CustomButton from "./CustomButton";

const Team = () => {
  return (
    <section className="mb-36">
      <SectionHeader
        title={sectionList[3].title}
        description={sectionList[3].description}
      />

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-10">
        {teamList.map((team) => (
          <TeamCard {...team} />
        ))}
      </div>

      <div className="text-end mt-10">
        <CustomButton
          title="See all team"
          containerStyles="w-full text-xl sm:w-auto"
        />
      </div>
    </section>
  );
};

export default Team;
