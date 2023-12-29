'use client'
export default function Stack() {
  return (
    <div className="c-stack">
      <div className="container mx-auto">
        <h2 className="text-center text-winston-primary mb-16">My Journey In the Digital Industry</h2>
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
                  <div className="flip-card-front md:flex">
                    <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md ml-6 mb-10">
                      <h4 className="text-winston-primary mb-4 font-bold">Laravel PHP</h4>
                      <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula.</p>
                    </div>
                  </div>
                  <div className="flip-card-back md:flex">
                    <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md ml-6 mb-10">
                      <h4 className="text-winston-primary mb-4 font-bold">Hello</h4>
                      <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula.</p>
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
                  <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md ml-6 md:ml-0 md:mr-6 mb-10">
                    <h4 className="text-winston-primary mb-4 font-bold">Vue.js</h4>
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula.</p>
                  </div>
                </div>
                <div className="flip-card-back md:flex justify-end">
                  <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md ml-6 md:ml-0 md:mr-6 mb-10">
                    <h4 className="text-winston-primary mb-4 font-bold">Hello</h4>
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula.</p>
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
                    <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md ml-6 mb-10">
                      <h4 className="text-winston-primary mb-4 font-bold">React.js</h4>
                      <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula.</p>
                    </div>
                  </div>
                  <div className="flip-card-back md:flex">
                    <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md ml-6 mb-10">
                      <h4 className="text-winston-primary mb-4 font-bold">Hello</h4>
                      <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula.</p>
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
                  <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md ml-6 md:ml-0 md:mr-6 mb-10">
                    <h4 className="text-winston-primary mb-4 font-bold">MySQL</h4>
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula.</p>
                  </div>
                </div>
                <div className="flip-card-back md:flex justify-end">
                  <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md ml-6 md:ml-0 md:mr-6 mb-10">
                    <h4 className="text-winston-primary mb-4 font-bold">Hello</h4>
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula.</p>
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