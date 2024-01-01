'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
import { useCallback, useRef } from 'react'
import Image from 'next/image'

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
        <h2 className="text-center text-winston-primary pb-8 md:pb-20">My Day to Day</h2>
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
                <p className="text-justify">
                  In my day-to-day role as a website developer, my activities are multifaceted and dynamic, beginning with the conceptualization and planning of web projects.
                  I collaborate closely with clients and stakeholders to gather requirements, ensuring a clear understanding of design preferences, functionalities, and overall project goals.
                  My day involves coding and programming using a variety of languages such as HTML, CSS, JavaScript, and often leveraging frameworks such as Laravel and Vue.
                </p>
              </div>
              <div className="image-container">
                <Image width={500} height={50} src={'/website-development.jpg'} alt="Website Development" />
                <div className="overlay"></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="content-container">
                <h3 className="mb-4 text-winston-primary">Responsive Design</h3>
                <p>
                  I start my day by reviewing design mockups and wireframes, carefully considering how each element will respond to different breakpoints.
                  With a combination of HTML, CSS, and JavaScript, I implement responsive design principles to create fluid layouts and flexible components.
                  I conduct testing on various devices to verify the responsiveness and troubleshoot any issues that may arise.
                </p>
              </div>
              <div className="image-container">
                <Image width={500} height={50} src={'/responsive.jpg'} alt="Website Development" />
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
                <Image width={500} height={50} src={'/seo.jpg'} alt="Website Development" />
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
                <Image width={500} height={50} src={'/uiux.jpg'} alt="Website Development" />
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