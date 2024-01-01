'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import Image from 'next/image'
export default function Clients() {
  return (
    <div className="c-clients">
      <div className="container mx-auto">
        <div className="work-container">
          <h3 className="text-winston-primary mb-4 text-start lg:mb-16">Check out some of the clients I have worked with</h3>
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{
              clickable: true
            }}
            autoplay={{
              delay: 2500,
              pauseOnMouseEnter: true
            }}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
          >
            <SwiperSlide>
              <div className="card">
                <div className="image-container">
                  <Image width={50} height={50} src={'./dobsons.svg'} alt="Dobsons" />
                </div>
                <div className="content-container">
                  <h4 className="text-white mb-4">Dobsons School Uniforms</h4>
                  <p className="mb-4">
                    Currently Dobsons operate 34+ on campus school shops, 4 major retail outlets which compliments are our work with Australia’s brightest schools via our wholesale service.
                    Their manufacturing complex in Dandenong, Victoria wholesale’s quality products to schools, clubs and corporations across Australia, employing more than 90 staff which continues to grow today.
                    There are now 3 direct descendants working within the company.
                  </p>
                  <a href="#" className="btn btn-primary">Visit Site</a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="image-container">
                  <Image width={50} height={50} src={'./haven.svg'} alt="Haven" />
                </div>
                <div className="content-container">
                  <h4 className="text-white">Haven Home Safe</h4>
                  <p className="mb-4">
                    For 45 years, They’ve worked with government, public and private partners to mobilise funding and collaborate for greater housing and homelessness solutions for a better future.
                    With a commitment to placing clients at the core of their decision making, providing support programs that connect with people’s unique needs and strengthen their knowledge, abilities and capacity to thrive.
                  </p>
                  <a href="https://havenhomesafe.org.au" target="_blank" className="btn btn-primary">Visit Site</a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="image-container">
                  <Image width={50} height={50} src={'./bacash.svg'} alt="Bacash" />
                </div>
                <div className="content-container">
                  <h4 className="text-white">Bacash Restaurant</h4>
                  <p className="mb-4">
                    Overlooking the superb greenery of the Royal Botanic Gardens – Bacash is a space for any reason and all seasons.
                    Upon relocating south of the river, with a diversified menu and fresh new look, they reopened their doors as Bacash.
                  </p>
                  <a href="https://bacash.com.au/" target="_blank" className="btn btn-primary">Visit Site</a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="image-container">
                  <Image width={50} height={50} src={'./vch.svg'} alt="Bacash" />
                </div>
                <div className="content-container">
                  <h4 className="text-white">Victoria Crane Hire</h4>
                  <p className="mb-4">
                    VCH is a Victoria’s largest comprehensive crane solution provider catering to heavy lifting, haulage and other industrial logistic needs.
                    Their fleet of 50 crane trucks are strategically located in the South East and Western regions of Melbourne, across three sites, and offer capabilities that are unlike any in Australia.
                  </p>
                  <a href="https://www.vch.com.au/" target="_blank" className="btn btn-primary">Visit Site</a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="image-container">
                  <Image width={50} height={50} src={'./fronditha.svg'} alt="Fronditha" />
                </div>
                <div className="content-container">
                  <h4 className="text-white">Fronditha Aged Care</h4>
                  <p className="mb-4">
                    A leading not-for-profit organisation with a mission to provide older Victorians,
                    their families and carers with a full range of quality community-based services and residential homes and apartments.
                  </p>
                  <a href="https://frondithacare.org.au/" target="_blank" className="btn btn-primary">Visit Site</a>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}