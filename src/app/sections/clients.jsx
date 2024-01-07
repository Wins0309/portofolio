'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import Image from 'next/image'
export default function Clients() {
  return (
    <div className="c-clients" id="clients">
      <div className="container mx-auto">
        <div className="work-container">
          <h2 className="text-winston-primary mb-4 text-center lg:mb-16 font-bold w-full">Check out some of the work I have done</h2>
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{
              clickable: true
            }}
            autoplay={{
              delay: 5000,
              pauseOnMouseEnter: true
            }}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
          >
            <SwiperSlide>
              <div className="card">
                <div className="image-container">
                  <Image loading="eager" width={50} height={50} src={'./dobsons.svg'} alt="Dobsons" />
                </div>
                <div className="content-container">
                  <h4 className="text-white mb-4 font-semibold">Dobsons School Uniforms</h4>
                  <p className="mb-4">
                    {"I was involved in Dobson's webstore rebuild, focusing on optimizing product catalogue, enhancing the look and feel of their new site and providing E-Commerce services within the site." +
                      "With this new site, customers can conveniently get all their children's uniform in one go!"}
                  </p>
                  <a href="https://dobsons.com.au" target="_blank" className="btn btn-primary">Visit Site</a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="image-container">
                  <Image loading="eager" width={50} height={50} src={'./haven.svg'} alt="Haven" />
                </div>
                <div className="content-container">
                  <h4 className="text-white font-semibold">Haven Home Safe</h4>
                  <p className="mb-4">
                    I was tasked to work on their new website, creating a media to help reach more people who are in need of shelter.
                    With the help of the site, they can explain more details on the services they provide and reach out to more people who needs help.
                  </p>
                  <a href="https://havenhomesafe.org.au" target="_blank" className="btn btn-primary">Visit Site</a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="image-container">
                  <Image loading="eager" width={50} height={50} src={'./bacash.svg'} alt="Bacash" />
                </div>
                <div className="content-container">
                  <h4 className="text-white font-semibold">Bacash Restaurant</h4>
                  <p className="mb-4">
                    I was assigned to create a website that allow users to book a seating in their restaurant and shop for wine.
                    This is one of the most aesthetically pleasing site that I got to work on. The site displays a beautiful selection of wines in the shop
                    and stunning menus.
                  </p>
                  <a href="https://bacash.com.au/" target="_blank" className="btn btn-primary">Visit Site</a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="image-container">
                  <Image loading="eager" width={50} height={50} src={'./technicalities.svg'} alt="Bacash" />
                </div>
                <div className="content-container">
                  <h4 className="text-white font-semibold">Technicalities</h4>
                  <p className="mb-4">
                    I was involved in migrating the site into a newer version of the stack, as well as refurbishing the look of the new site.
                    This website displays and provide valuable information of the services and solutions that Technicalities has to offer.
                  </p>
                  <a href="https://www.vch.com.au/" target="_blank" className="btn btn-primary">Visit Site</a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="image-container">
                  <Image loading="eager" width={50} height={50} src={'./fronditha.svg'} alt="Fronditha" />
                </div>
                <div className="content-container">
                  <h4 className="text-white font-semibold">Fronditha Aged Care</h4>
                  <p className="mb-4">
                    This is my first project coming into the digital industry, I was asked to help built this site to help the organization reach people who are in need of age care services.
                    This website also acts as a media to find people who are willing to volunteer and work with them for a better age care service in Australia.
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