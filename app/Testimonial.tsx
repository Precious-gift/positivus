"use client";
import { SectionHeader } from "@/components";
import { sectionList } from "@/constants";
import React from "react";

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const slides: string[] = ["Slide 1", "Slide 2", "Slide 3", "Slide 4"];
  const nextSlide = (n: number) => {
    setCurrentSlide((prevSlide) => {
      let newSlide = prevSlide + n;
      if (newSlide >= slides.length) {
        return 0;
      } else if (newSlide < 0) {
        return slides.length - 1;
      } else {
        return newSlide;
      }
    });
  };

  return (
    <section className="mb-36">
      <SectionHeader
        title={sectionList[4].title}
        description={sectionList[4].description}
      />
      <div className="card mt-20 bg-black">
        <div className="text-white slides">
          {slides.map((slide, index) => {
            return (
              <h1
                className={`slide text-5xl ${
                  index === currentSlide ? "block" : "hidden"
                }`}
              >
                {slide}
              </h1>
            );
          })}
          <a onClick={() => nextSlide(-1)}>Previous</a>
          <a onClick={() => nextSlide(1)}>Next</a>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
