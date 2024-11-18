'use client'


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SingleCard from './SingleCard';
import { Mail } from 'lucide-react';

export default function CardSwipe() {
  return (
    <section className='flex flex-col items-center gap-y-28'>
        <p>a creative and supportive community to develop our skills and learn together outside the academic scope</p>

  <div className='border-biscay border-2 rounded-2xl flex flex-col items-center'>
        <div className='p-6 rounded-full border-biscay border-2 block relative -top-12 bg-white'>
          <Mail size={45} color='#174760'/>
        </div>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className="p-5"
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
  </div>
</section>

  )
}
