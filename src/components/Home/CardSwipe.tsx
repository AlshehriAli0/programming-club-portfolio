'use client'


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SingleCard from './SingleCard';
import { Mail } from 'lucide-react';

export default function CardSwipe() {
  return (
    <section className='flex flex-col items-center gap-y-28 px-5'>
        <p className='text-center text-[#174760] sm:text-[37.86px] text-2xl font-normal'>a creative and supportive community to develop our skills and learn together outside the academic scope</p>

        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className="border-biscay border-2 rounded-2xl"
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect
          infinite={false}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          partialVisible
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024
              },
              items: 1,
              partialVisibilityGutter: 40
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0
              },
              items: 1,
              partialVisibilityGutter: 30
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464
              },
              items: 1,
              partialVisibilityGutter: 30
            }
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

  )
}
