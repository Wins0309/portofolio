'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
import { useCallback, useRef } from 'react'

export default function Work() {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div className="c-work">
      <div className="container mx-auto">
        <h3 className="text-center text-white mb-16">My Day to Day</h3>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          ref={sliderRef}
        >
          <SwiperSlide>
            <div className="card">
              <div className="content-container">
                <h3 className="mb-4 text-winston-primary">Website Development</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit purus ac dictum ullamcorper.
                  Vestibulum libero lectus, suscipit et molestie non, ultricies ac arcu. In tellus tortor, placerat eget
                  mattis id, volutpat id eros.
                  Aenean vel pharetra erat. Nullam in egestas tortor. Curabitur ante enim, efficitur a volutpat sed, fermentum
                  eu neque.
                </p>
              </div>
              <div className="image-container">
                <img src={'./website-development.jpg'} alt="Website Development" />
                <div className="overlay"></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="content-container">
                <h3 className="mb-4 text-winston-primary">Responsive Design</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit purus ac dictum ullamcorper.
                  Vestibulum libero lectus, suscipit et molestie non, ultricies ac arcu. In tellus tortor, placerat eget
                  mattis id, volutpat id eros.
                  Aenean vel pharetra erat. Nullam in egestas tortor. Curabitur ante enim, efficitur a volutpat sed, fermentum
                  eu neque.
                </p>
              </div>
              <div className="image-container">
                <img src={'./responsive.jpg'} alt="Website Development" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="content-container">
                <h3 className="mb-4 text-winston-primary">SEO Management</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit purus ac dictum ullamcorper.
                  Vestibulum libero lectus, suscipit et molestie non, ultricies ac arcu. In tellus tortor, placerat eget
                  mattis id, volutpat id eros.
                  Aenean vel pharetra erat. Nullam in egestas tortor. Curabitur ante enim, efficitur a volutpat sed, fermentum
                  eu neque.
                </p>
              </div>
              <div className="image-container">
                <img src={'./seo.jpg'} alt="Website Development" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="content-container">
                <h3 className="mb-4 text-winston-primary">UI / UX Experience</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit purus ac dictum ullamcorper.
                  Vestibulum libero lectus, suscipit et molestie non, ultricies ac arcu. In tellus tortor, placerat eget
                  mattis id, volutpat id eros.
                  Aenean vel pharetra erat. Nullam in egestas tortor. Curabitur ante enim, efficitur a volutpat sed, fermentum
                  eu neque.
                </p>
              </div>
              <div className="image-container">
                <img src={'./uiux.jpg'} alt="Website Development" />
              </div>
            </div>
          </SwiperSlide>
          <div className="flex gap-2 justify-center w-full">
            <button className="prev-arrow" onClick={handlePrev}>
              <IconChevronLeft></IconChevronLeft>
            </button>
            <button className="next-arrow" onClick={handleNext}>
              <IconChevronRight></IconChevronRight>
            </button>
          </div>
        </Swiper>
      </div>
    </div>
  )
}