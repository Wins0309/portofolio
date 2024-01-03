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
    <div className="c-work" id="work">
      <div className="container mx-auto">
        <h2 className="text-center text-winston-primary pb-8 md:pb-20 font-bold">My Day to Day</h2>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          ref={sliderRef}
        >
          <SwiperSlide>
            <div className="card">
              <div className="content-container">
                <h3 className="mb-4 text-winston-primary font-semibold">Website Development</h3>
                <p className="">
                  In my day-to-day role as a website developer, my activities are multifaceted and dynamic, beginning with the conceptualization and planning of web projects.
                  I collaborate closely with clients and stakeholders to gather requirements, ensuring a clear understanding of design preferences, functionalities, and overall project goals.
                </p>
              </div>
              <div className="image-container">
                <Image width={500} height={500} src={'/website-development.jpg'} alt="Website Development" />
                <div className="overlay"></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="content-container">
                <h3 className="mb-4 text-winston-primary font-semibold">Responsive Design</h3>
                <p>
                  I start my day by reviewing design mockups and wireframes, carefully considering how each element will respond to different breakpoints.
                  I implement responsive design principles to create fluid layouts and flexible components.
                  I conduct testing on various devices to verify the responsiveness and troubleshoot any issues that may arise.
                </p>
              </div>
              <div className="image-container">
                <Image width={500} height={500} src={'/responsive.jpg'} alt="Website Development" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="content-container">
                <h3 className="mb-4 text-winston-primary font-semibold">UI / UX Experience</h3>
                <p>
                  My day-to-day is marked by a keen eye for detail, as I ensure pixel-perfect development and consistently improve my innovative solutions to elevate the visual appeal and usability of websites.
                  Not to forget, my work also involves providing excellent user experience in terms of navigating through a site.
                </p>
              </div>
              <div className="image-container">
                <Image width={500} height={500} src={'/uiux.jpg'} alt="Website Development" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="content-container">
                <h3 className="mb-4 text-winston-primary font-semibold">SEO Handling</h3>
                <p>
                  {"In my day-to-day work, I play a pivotal role in establishing a seamless bridge for SEO managers to integrate and optimize content on our clients' websites. \n" +
                  "My responsibilities extend beyond traditional web development as I actively collaborate with SEO managers to implement a structured approach to incorporating SEO elements into the site's architecture."}
                </p>
              </div>
              <div className="image-container">
                <Image width={500} height={500} src={'/seo.jpg'} alt="Website Development" />
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