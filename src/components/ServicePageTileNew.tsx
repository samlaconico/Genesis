"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";
import { BsChevronCompactRight } from "react-icons/bs";
import { BsChevronCompactLeft } from "react-icons/bs";

type ServicePageTileNewParams = {
  title: string;
  description: string;
  images: string[];
};

export default function ServicePageTileNew({
  title,
  description,
  images,
}: ServicePageTileNewParams) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <>
      <div id={title} className="flex flex-col space-y-7 md:flex-row w-full md:h-[50vh] space-x-8 px-12 py-6">
        <div className="h-full md:w-1/2 overflow-hidden relative">
          <div className="embla w-full h-full">
            <div className="absolute z-20 w-full h-full">
              <div className="flex flex-row h-full px-6 justify-between">
                <div className="flex flex-col h-full justify-center">
                  <button className="embla__prev" onClick={scrollPrev}>
                    <BsChevronCompactLeft className="scale-[3]" />
                  </button>{" "}
                </div>

                <div className="flex flex-col justify-center">
                  <button className="embla__next" onClick={scrollNext}>
                    <BsChevronCompactRight className="scale-[3]" />
                  </button>{" "}
                </div>
              </div>
            </div>
            <div className="embla_viewport w-full h-full" ref={emblaRef}>
              <div className="embla__container w-full h-full">
                {images.map((value, number, str) => (
                  <div className="embla__slide w-full h-full" key={number}>
                    <img
                      className="m-auto object-center w-full h-full object-cover"
                      src={value}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="h-full md:w-1/2 space-y-4 flex-col flex justify-center">
          <h1 className="font-poppins text-3xl capitalize font-bold">
            {title}
          </h1>

          <p className="font-jost text-xl md:text-2xl lg:text-3xl text-pretty">
            {description}
          </p>
        </div>
      </div>
    </>
  );
}
