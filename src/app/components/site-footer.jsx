import Image from 'next/image'
export default function SiteFooter() {
  return (
    <div className="site-footer">
      <div className="container mx-auto z-20">
        <div className="lg:flex w-full items-center justify-center lg:justify-between">
          <div className="text-white mb-8 text-center lg:mb-0 lg:text-start">
            <h3>For Any Enquiries</h3>
          </div>
          <div className="buttons-container">
            <a href="https://www.linkedin.com/in/winstonlie/" target="_blank" className="btn btn-outline-primary rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="48px" height="48px">
                <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z"/>
              </svg>
            </a>
            <a href="https://github.com/Wins0309" target="_blank" className="btn btn-outline-primary mr-4">
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="60px" height="60px">
                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"/>
              </svg>
            </a>
            <div className="border-l border-1 border-white inline-flex">
              <a href="mailto:winstonl3900@gmail.com" className="btn btn-outline-primary ml-4">{"Let's Connect"}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}