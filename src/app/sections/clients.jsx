'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
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
                  <img src={'./dobsons.svg'} alt="Dobsons" />
                </div>
                <div className="content-container">
                  <h4 className="text-white mb-4">Dobsons School Uniforms</h4>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit purus ac dictum ullamcorper.
                    Vestibulum libero lectus, suscipit et molestie non, ultricies ac arcu. In tellus tortor, placerat eget
                    mattis id, volutpat id eros.
                    Aenean vel pharetra erat. Nullam in egestas tortor. Curabitur ante enim, efficitur a volutpat sed, fermentum
                    eu neque.
                  </p>
                  <a href="#" className="btn btn-primary">Visit Site</a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="image-container">
                  <img src={'./haven.svg'} alt="Haven" />
                </div>
                <div className="content-container">
                  <h4 className="text-white">Haven Home Safe</h4>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit purus ac dictum ullamcorper.
                    Vestibulum libero lectus, suscipit et molestie non, ultricies ac arcu. In tellus tortor, placerat eget
                    mattis id, volutpat id eros.
                    Aenean vel pharetra erat. Nullam in egestas tortor. Curabitur ante enim, efficitur a volutpat sed, fermentum
                    eu neque.
                  </p>
                  <a href="#" className="btn btn-primary">Visit Site</a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="image-container">
                  <img src={'./bacash.svg'} alt="Bacash" />
                </div>
                <div className="content-container">
                  <h4 className="text-white">Bacash Restaurant</h4>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit purus ac dictum ullamcorper.
                    Vestibulum libero lectus, suscipit et molestie non, ultricies ac arcu. In tellus tortor, placerat eget
                    mattis id, volutpat id eros.
                    Aenean vel pharetra erat. Nullam in egestas tortor. Curabitur ante enim, efficitur a volutpat sed, fermentum
                    eu neque.
                  </p>
                  <a href="#" className="btn btn-primary">Visit Site</a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="image-container">
                  <img src={'./vch.svg'} alt="Bacash" />
                </div>
                <div className="content-container">
                  <h4 className="text-white">Victoria Crane Hire</h4>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit purus ac dictum ullamcorper.
                    Vestibulum libero lectus, suscipit et molestie non, ultricies ac arcu. In tellus tortor, placerat eget
                    mattis id, volutpat id eros.
                    Aenean vel pharetra erat. Nullam in egestas tortor. Curabitur ante enim, efficitur a volutpat sed, fermentum
                    eu neque.
                  </p>
                  <a href="#" className="btn btn-primary">Visit Site</a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="image-container">
                  <img src={'./fronditha.svg'} alt="Fronditha" />
                </div>
                <div className="content-container">
                  <h4 className="text-white">Fronditha Aged Care</h4>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit purus ac dictum ullamcorper.
                    Vestibulum libero lectus, suscipit et molestie non, ultricies ac arcu. In tellus tortor, placerat eget
                    mattis id, volutpat id eros.
                    Aenean vel pharetra erat. Nullam in egestas tortor. Curabitur ante enim, efficitur a volutpat sed, fermentum
                    eu neque.
                  </p>
                  <a href="#" className="btn btn-primary">Visit Site</a>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}