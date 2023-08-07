import "./HeroSection.css";
function HeroSection() {
  return (
    <>
      <div className="Hero-container container-fluid px-0 no-padding">
        <div className="text-container">
          <h1 className="title">CS at SJSU</h1>
          <p className="larger-descript">
            We’re the largest Computer Science organization at San José State
            University!{" "}
          </p>

          <p className="smaller-descript">
            Join us for technical workshops, interview prep, and more fun stuff!{" "}
          </p>

          <div className="button-container">
            <a
              class=""
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
            >
              <button class="join-button">Join Us!</button>
            </a>
            <a class="" href="#">
              <img src="logo192.png" class="icon" alt="element" />
            </a>
            <a class="" href="#">
              <img src="logo192.png" class="icon" alt="element" />
            </a>
            <a class="" href="#">
              <img src="logo192.png" className="icon" alt="element" />
            </a>
          </div>
        </div>
        <div className="image-container">
          <img src="placeholder.jpg" class="club-image" alt="club-activities" />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
