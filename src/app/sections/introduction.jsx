'use client'
import Image from 'next/image'
export default function Introduction() {
  return (
    <div className="c-introduction" id="introduction">
      <div className="container mx-auto">
        <div className="content-container">
          <p className="tagline mb-0" data-aos="slide-down" data-aos-delay="100" data-aos-duration="1500" data-aos-easing="ease-in-out" data-aos-mirror="true">Full Stack Developer</p>
          <h2 className="text-white uppercase font-bold mb-4" data-aos="slide-right" data-aos-delay="100" data-aos-duration="1500" data-aos-easing="ease-in-out" data-aos-mirror="true">{"Hi, I'm Winston!"}</h2>
          <p className="description text-center lg:text-start mb-4" data-aos="slide-right" data-aos-delay="100" data-aos-duration="1500" data-aos-easing="ease-in-out" data-aos-mirror="true">
            {"Hey there! 👋 I'm a Full Stack Web Developer based in Melbourne, Australia with a knack for turning ideas into awesome websites.\n" +
            "With two years of hands-on experience, I specialize in crafting digital magic using WordPress and Laravel Vue."}
          </p>
          <a href="/resume.pdf" target="_blank" className="btn btn-outline-primary" data-aos="slide-right" data-aos-delay="100" data-aos-duration="1500" data-aos-easing="ease-in-out" data-aos-mirror="true">Download My Resume</a>
        </div>
        <div className="image-container">
          <div className="image-wrapper w-full">
            <Image loading="eager" width={5000} height={5000} src={'/face.png'} alt="Face Image" />
          </div>
          <div className="background-text">
            <h1>Full Stack Developer</h1>
          </div>
          <div className="circle-container">
            <span id="circle">
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}