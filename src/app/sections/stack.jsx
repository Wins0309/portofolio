'use client'
export default function Stack() {
  return (
    <div className="c-stack" id="stack">
      <div className="container mx-auto">
        <h2 className="text-center text-winston-primary mb-16 font-bold">My Journey In the Digital Industry</h2>
        <ol className="stack">
          <li className="border-l-2 border-winston-primary md:col-start-2">
            <div className="md:flex flex-start">
              <div className="absolute bg-winston-primary w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" className="text-white w-3 h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
                </svg>
              </div>
              <div
                className="flip-card"
                data-aos="fade-left"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-easing="ease-in-out"
              >
                <div className="flip-card-inner">
                  <div className="flip-card-front md:flex justify-start">
                    <div className="flex flex-col h-full justify-center items-center text-start p-6 rounded-lg shadow-lg bg-winston-secondary max-w-md ml-6">
                      <h4 className="text-winston-primary mb-4 font-bold">Back-End Frameworks</h4>
                      <p className="description">
                        Through hands-on tasks and challenges in the workplace, I gradually honed my skills in customizing and optimizing
                        WordPress and Laravel to create tailored solutions for the clients that I work with.
                      </p>
                    </div>
                  </div>
                  <div className="flip-card-back md:flex justify-start">
                    <div className="flex flex-col h-full justify-center items-center text-start p-6 rounded-lg shadow-lg bg-winston-secondary max-w-md ml-6">
                      <h4 className="text-winston-primary mb-4 font-bold">Back-End Languages</h4>
                      <p className="description">
                        As my main frameworks both revolve around PHP, it has naturally become my primary back-end language to use in my day to day at work.
                        Although, I am expanding my options through personal projects with other languages such as Javascript and Python.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="border-l-2 border-winston-primary md:border-none">
            <div className="flex md:hidden absolute bg-winston-primary w-6 h-6  items-center justify-center rounded-full -ml-3.5">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" className="text-white w-3 h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
              </svg>
            </div>
            <div
              className="flip-card"
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-easing="ease-in-out"
            >
              <div className="flip-card-inner">
                <div className="flip-card-front md:flex justify-end">
                  <div className="flex flex-col p-6 h-full justify-center items-center rounded-lg shadow-lg bg-winston-secondary max-w-md ml-6 md:ml-0 md:mr-6">
                    <h4 className="text-winston-primary mb-4 font-bold">Front-End Frameworks</h4>
                    <p className="description">
                      I focus on Vue.js as my main framework, working with both Vue 2 and Vue 3 throughout my projects.
                      <br />
                      Currently, I am also exploring other frameworks such as React and SSR version of Vue which is Nuxt.Js
                    </p>
                  </div>
                </div>
                <div className="flip-card-back md:flex justify-end">
                  <div className="flex flex-col p-6 h-full justify-center items-center rounded-lg shadow-lg bg-winston-secondary max-w-md ml-6 md:ml-0 md:mr-6">
                    <h4 className="text-winston-primary mb-4 font-bold">Front-End Languages</h4>
                    <p className="description">
                      {"That's right! As you can guess from the framework, I use Javascript alot. Most of my projects definitely involve some sort of javascript.\n" +
                      "Let's not forget HTML and CSS that are essential in building out the site."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="hidden border-l-2 border-winston-primary md:block">
            <div className="hidden md:flex absolute bg-winston-primary w-6 h-6  items-center justify-center rounded-full -ml-3.5">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" className="text-white w-3 h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
              </svg>
            </div>
          </li>
          <li className="border-l-2 border-winston-primary md:col-start-2">
            <div className="md:flex flex-start">
              <div className="absolute bg-winston-primary w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" className="text-white w-3 h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
                </svg>
              </div>
              <div
                className="flip-card"
                data-aos="fade-left"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-easing="ease-in-out"
              >
                <div className="flip-card-inner">
                  <div className="flip-card-front md:flex">
                    <div className="flex flex-col p-6 h-full justify-center items-center rounded-lg shadow-lg bg-winston-secondary max-w-md ml-6">
                      <h4 className="text-winston-primary mb-4 font-bold">Styling Frameworks</h4>
                      <p className="description">
                        On the styling front, frameworks like Bootstrap or Tailwind CSS are my main go to, As they provide responsive grid systems and facilitates consistent and efficient styling.
                      </p>
                    </div>
                  </div>
                  <div className="flip-card-back md:flex">
                    <div className="flex flex-col p-6 h-full justify-center items-center rounded-lg shadow-lg bg-winston-secondary max-w-md ml-6">
                      <h4 className="text-winston-primary mb-4 font-bold">Animation Frameworks</h4>
                      <p className="description">
                        On the animation side, I had fun working with GSAP and AOS, which provides me with really smooth on scroll transition.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="border-l-2 border-winston-primary md:border-none">
            <div className="flex md:hidden absolute bg-winston-primary w-6 h-6  items-center justify-center rounded-full -ml-3.5">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" className="text-white w-3 h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
              </svg>
            </div>
            <div
              className="flip-card"
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-easing="ease-in-out"
            >
              <div className="flip-card-inner">
                <div className="flip-card-front md:flex justify-end">
                  <div className="flex flex-col p-6 h-full justify-center items-center rounded-lg shadow-lg bg-winston-secondary max-w-md ml-6 md:ml-0 md:mr-6">
                    <h4 className="text-winston-primary mb-4 font-bold">Database</h4>
                    <p className="description">
                      Over the course of my professional journey, I have proficiently navigated MySQL to manage databases, demonstrating a keen understanding of its schema design, querying capabilities, and optimization features.
                    </p>
                  </div>
                </div>
                <div className="flip-card-back md:flex justify-end">
                  <div className="flex flex-col p-6 h-full justify-center items-center rounded-lg shadow-lg bg-winston-secondary max-w-md ml-6 md:ml-0 md:mr-6">
                    <h4 className="text-winston-primary mb-4 font-bold">Continuous Integrations and Deployments</h4>
                    <p className="description">
                      I have seamlessly integrated these tools into my workflow to automate the deployment and continuous integration processes, ensuring efficiency and reliability in software development using tools such as Netlify and Laravel Forge
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="hidden border-l-2 border-winston-primary md:block">
            <div className="hidden md:flex absolute bg-winston-primary w-6 h-6  items-center justify-center rounded-full -ml-3.5">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" className="text-white w-3 h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
              </svg>
            </div>
          </li>
        </ol>
      </div>
    </div>
  )
}