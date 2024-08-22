"use client";
import { SectionHeader } from "@/components";
import { sectionList } from "@/constants";
import React from "react";

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const slides: string[] = [
    "Slide 1",
    "Slide 2",
    "Slide 3",
    "Slide 4",
    "Slide 5",
    "Slide 6",
    "Slide 7",
    "Slide 8",
    "Slide 9",
  ];
  const totalPages = Math.ceil(slides.length / 3);
  const nextSlide = (n: number) => {
    setCurrentSlide((prevSlide) => {
      let newSlide = prevSlide + n;
      if (newSlide >= slides.length) {
        return 0;
      } else if (newSlide < 0) {
        return slides.length - (slides.length % 3 == 0 ? 3 : slides.length % 3);
      } else {
        return newSlide;
      }
    });
  };

  const gotoSlide = (n: number) => {
    setCurrentSlide(n * 3);
  };
  return (
    <section className="mb-36">
      <SectionHeader
        title={sectionList[4].title}
        description={sectionList[4].description}
      />
      <div className="card mt-20 bg-black text-white">
        <div className=" slides grid grid-cols-3">
          {slides.map((slide, index) => {
            return (
              <h1
                className={`slide text-5xl ${
                  index >= currentSlide && index < currentSlide + 3
                    ? "block"
                    : "hidden"
                }`}
              >
                {slide}
              </h1>
            );
          })}
        </div>
        <div className="flex justify-center items-center gap-24 mt-20">
          <a onClick={() => nextSlide(-3)} className="cursor-pointer">
            <img src="/positivus_left_arrow_icon.svg" />
          </a>
          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, index) => {
              return (
                <span
                  className={`team-star ${
                    index === currentSlide / 3 ? "bg-yellow-500" : "bg-white"
                  }`}
                  onClick={() => gotoSlide(index)}
                ></span>
              );
            })}
          </div>
          <a onClick={() => nextSlide(3)} className="cursor-pointer">
            <img src="/positivus_right_arrow_icon.svg" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
