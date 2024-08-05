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
      <div
        id={title}
        className="flex w-full flex-col space-y-7 px-6 py-6 lg:h-[40rem] lg:flex-row lg:space-x-8 lg:space-y-0 lg:px-12"
      >
        <div className="relative h-full overflow-hidden lg:w-1/2">
          <div className="embla h-full w-full">
            <div className="absolute z-20 h-full w-full">
              <div className="flex h-full flex-row justify-between">
                <div
                  className="flex h-full flex-col justify-center hover:cursor-pointer hover:bg-white hover:bg-opacity-50"
                  onClick={scrollPrev}
                >
                  <button className="embla__prev">
                    <BsChevronCompactLeft className="mx-6 scale-[3]" />
                  </button>{" "}
                </div>

                <div
                  className="flex flex-col justify-center hover:cursor-pointer hover:bg-white hover:bg-opacity-50"
                  onClick={scrollNext}
                >
                  <button className="embla__next" onClick={scrollNext}>
                    <BsChevronCompactRight className="mx-6 scale-[3]" />
                  </button>{" "}
                </div>
              </div>
            </div>
            <div className="embla_viewport h-full w-full" ref={emblaRef}>
              <div className="embla__container h-full w-full">
                {images.map((value, number, str) => (
                  <div className="embla__slide h-full w-full" key={number}>
                    <img
                      className="m-auto h-full w-full object-cover object-center"
                      src={value}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex h-fit flex-col justify-center space-y-4 self-center lg:w-1/2">
          <h1 className="text-nowrap font-poppinsBold text-3xl font-bold capitalize">
            {title}
          </h1>

          <p className="text-pretty font-jost text-xl lg:text-3xl xl:text-3xl">
            {description}
          </p>
        </div>
      </div>
    </>
  );
}
