"use client";
import { ProcessListProps } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";

const ProcessCard = ({ id, title, description, active }: ProcessListProps) => {
  const [isActive, setIsActive] = useState(active);
  const toggleActive = () => {
    setIsActive(!isActive);
  };
  return (
    <div className={`card ${isActive ? "bg-themeGreen" : "bg-gray-100"}`}>
      <div className="grid grid-cols-[10%_auto_20%] gap-3 items-center">
        <h1 className="text-[60px] justify-self-center">{id}</h1>
        <h4 className="text-[30px]">{title}</h4>
        <div className="justify-self-end">
          <span
            className="circle border border-black w-[50px] h-[50px] bg-white cursor-pointer"
            onClick={toggleActive}
          >
            <Image
              src={`${
                isActive
                  ? "/positivus_minus_icon.svg"
                  : "/positivus_plus_icon.svg"
              }`}
              width={25}
              height={25}
              alt="arrow icon"
            />
          </span>
        </div>
      </div>
      <div className={`${isActive ? "block" : "hidden"}`}>
        <div className="border border-black my-[30px]"></div>
        <div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProcessCard;
