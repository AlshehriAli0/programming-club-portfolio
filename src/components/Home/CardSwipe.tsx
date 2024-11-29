"use client";

import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SingleCard from "./SingleCard";

export default function CardSwipe() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateMobileState = () => {
      setIsMobile(window.innerWidth <= 464);
    };

    updateMobileState();

    window.addEventListener("resize", updateMobileState);

    return () => {
      window.removeEventListener("resize", updateMobileState);
    };
  }, []);

  return (
    <section className="flex flex-col items-center gap-y-28 px-5">
      <p className="px-2 pt-8 text-center text-2xl font-semibold text-[#174760] sm:text-[37.86px] lg:px-12 lg:pt-12">
        A creative and supportive community to develop our skills and learn together outside the academic
        scope
      </p>

      <Carousel
        additionalTransfrom={0}
        arrows={!isMobile}
        autoPlaySpeed={3000}
        centerMode={false}
        className="rounded-2xl border-2 border-biscay"
        containerClass="container"
        draggable
        focusOnSelect
        infinite={false}
        keyBoardControl
        minimumTouchDrag={80}
        partialVisible={false}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 1,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },

            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        shouldResetAutoplay
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
      </Carousel>
    </section>
  );
}
