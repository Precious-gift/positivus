import React from "react";
import { ClientProps } from "@/types";

const clientList: ClientProps[] = [
  { imgSrc: "/positivus_amazon_logo.svg", alt: "amazon logo" },
  { imgSrc: "/positivus_dribbble_logo.svg", alt: "dribbble logo" },
  { imgSrc: "/positivus_hubspot_logo.svg", alt: "hubspot logo" },
  { imgSrc: "/positivus_notion_logo.svg", alt: "notion logo" },
  { imgSrc: "/positivus_netflix_logo.svg", alt: "netflix logo" },
  { imgSrc: "/positivus_zoom_logo.svg", alt: "zoom logo" },
];
const Clients = () => {
  return (
    <div className="mt-16 mb-16 grid gap-x-16 sm:gap-x-16 gap-y-2 sm:gap-y-16 grid-cols-3 sm:grid-cols-6 grid-rows-2 sm:grid-rows-1">
      {clientList.map((client) => (
        <img
          src={client.imgSrc}
          alt={client.alt}
          className="w-full h-auto object-contain"
        />
      ))}
    </div>
  );
};

export default Clients;
