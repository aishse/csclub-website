import "./HeroSection.css";

import About from "./About";
import { useRef } from "react";

function HeroSection() {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
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
              className=""
              href="https://docs.google.com/forms/d/1A3ZfFi99pRlOdFOA2dCz62mhRsvaYjNhZC_olep0aU4/edit"
              target="_blank"
            >
              <button className="join-button">Join Us!</button>
            </a>
            <a
              className=""
              href="https://discord.gg/knZVah9sn8"
              target="_blank"
            >
              <img src="discord-logo.png" class="icon" alt="element" />
            </a>
            <a
              className=""
              href="https://www.facebook.com/groups/csclub.sjsu/"
              target="_blank"
            >
              <img src="fb-logo.png" class="icon" alt="element" />
            </a>
            <a
              className=""
              href="https://www.instagram.com/sjsucsclub/"
              target="_blank"
            >
              <img src="insta-logo.png" className="icon" alt="element" />
            </a>
          </div>
        </div>
        <div className="image-container">
          <img
            src="placeholder.jpg"
            className="club-image"
            alt="club-activities"
          />
        </div>
        <div className="scroll-button">
          <button className="" onClick={handleClick}>
            <img
              className="arrow-img"
              src="keyboard_arrow_down.svg"
              onClick={handleClick}
              alt="scroll to about page"
            />
          </button>
        </div>
      </div>

      <div ref={ref} style={{ backgroundColor: "lightblue" }}>
        <About />
      </div>
    </>
  );
}

export default HeroSection;
