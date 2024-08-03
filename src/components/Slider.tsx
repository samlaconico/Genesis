"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { HeroImages } from "../../data";

export default function Slider() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ stopOnInteraction: false }),
  ]);

  return (
    <div className="relative h-[75vh] overflow-hidden text-center opacity-100 transition-opacity">
      <div className="no-scrollbar absolute left-0 right-0 top-[40%] z-20 m-auto content-center overflow-y-scroll bg-neutral-50 bg-opacity-70 p-4 text-center backdrop-blur-sm md:top-[45%]">
        <h1 className="font-poppins text-3xl font-semibold">
          YOUR ONE STOP SHOP FOR EVERYTHING AUTOMOTIVE
        </h1>
      </div>

      <div className="embla z-0" ref={emblaRef}>
        <div className="embla__container">
          {HeroImages.map((value, index) => (
            <>
              <div className="embla__slide">
                <img
                  src={value}
                  className="h-screen w-full object-cover object-bottom"
                ></img>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
