import { ServiceCardProps } from "@/types";
import Image from "next/image";
import React from "react";

const ServiceCard = ({
  title,
  cardClass,
  arrowIconUrl,
  cardImageUrl,
}: ServiceCardProps) => {
  return (
    <div
      className={`card ${cardClass} flex flex-col gap-5 sm:gap-0 sm:flex-row justify-between items-center w-full`}
    >
      <div className="w-full sm:w-2/5 flex flex-col gap-12">
        <h3 className="w-1/2 sm:w-full">
          <span className="font-black px-2 py-2.5 rounded-lg inline leading-custom">
            {`${title}`}
          </span>
        </h3>
        <a
          href="#"
          className="flex items-center gap-2 absolute bottom-50 sm:relative sm:bottom-0"
        >
          <span className="arrow-circle">
            <Image
              src={`${arrowIconUrl}`}
              width={10}
              height={10}
              alt="arrow icon"
            />
          </span>
          <span className="hidden sm:inline arrow-text">Learn more</span>
        </a>
      </div>
      <div className="w-full sm:w-2/5 flex justify-end sm:block">
        <img src={`${cardImageUrl}`} />
      </div>
    </div>
  );
};

export default ServiceCard;
