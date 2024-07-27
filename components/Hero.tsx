import Image from "next/image";
import React from "react";
import { CustomButton, Clients } from "@/components";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:justify-between mt-8 sm:mt-16 relative pb-64 sm:pb-0">
        <div className="basis-full md:basis-5/12">
          <h1 className="text-5xl md:leading-tight font-medium">
            Navigating the digital landscape for success
          </h1>
          <p className="mt-4 text-lg sm:relative absolute bottom-0 pb-20 sm:pb-0">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <CustomButton
            title="Book a consultation"
            containerStyles="mt-4 w-full sm:w-auto sm:relative absolute bottom-0"
          />
        </div>
        <div className="basis-full md:basis-5/12 flex justify-center mt-10 sm:mt-0">
          <Image
            src="/positivus_hero_img.svg"
            alt="positivus logo"
            width={700}
            height={500}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
      <Clients />
    </>
  );
};

export default Hero;
