export default function Introduction() {
  return (
    <div className="c-introduction" id="introduction">
      <div className="container mx-auto">
        <div className="content-container">
          <p className="tagline mb-0">Full Stack Developer</p>
          <h2 className="text-white uppercase font-bold mb-4">Hi, I'm Winston!</h2>
          <p className="description text-center lg:text-start mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit purus ac dictum ullamcorper.
            Vestibulum libero lectus, suscipit et molestie non, ultricies ac arcu. In tellus tortor, placerat eget
            mattis id, volutpat id eros.
            Aenean vel pharetra erat. Nullam in egestas tortor. Curabitur ante enim, efficitur a volutpat sed, fermentum
            eu neque.
          </p>
          <button className="btn btn-outline-primary">Learn More</button>
        </div>
        <div className="image-container">
          <div className="image-wrapper">
            <img src={'face.png'} alt="Face Image" />
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