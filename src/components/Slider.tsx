"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { HeroImages } from "../../data";

export default function Slider() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ stopOnInteraction: false }),
  ]);

  return (
    <div className="opacity-100 transition-opacity relative h-[75vh] overflow-hidden text-center">
      <div className="bg-neutral-50 bg-opacity-70 backdrop-blur-sm absolute left-0 right-0 md:top-[45%] top-[40%] m-auto text-center p-4 content-center overflow-y-scroll no-scrollbar z-20">
        <h1 className="text-3xl font-semibold font-poppins">
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
                  className="object-cover w-full h-screen object-bottom"
                ></img>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
