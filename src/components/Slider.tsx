"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function Slider() {
  const [emblaRef] = useEmblaCarousel({ loop: true, }, [Autoplay({stopOnInteraction: false})]);

  return (
    <div className="opacity-100 transition-opacity hover:opacity-75 relative h-[75vh] overflow-hidden">
      <div className="bg-neutral-50 bg-opacity-70 backdrop-blur-sm absolute left-0 right-0 top-[45%] m-auto text-center p-4 content-center overflow-y-scroll no-scrollbar z-30">
        <h1 className="text-3xl font-semibold ">
          YOUR ONE STOP SHOP FOR EVERYTHING AUTOMOTIVE
        </h1>
      </div>

      <div className="embla z-0" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <img
              src="/images/homebg.png"
              className="object-cover w-full h-screen object-bottom"
            ></img>
          </div>
          <div className="embla__slide">
            <img
              src="/images/service1.png"
              className="object-cover w-full h-screen object-bottom"
            ></img>
          </div>
          <div className="embla__slide">
            <img
              src="/images/homebg.png"
              className="object-cover w-full h-screen object-bottom"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
