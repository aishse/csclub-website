import "./HeroSection.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
              className=""
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
            >
              <button className="join-button">Join Us!</button>
            </a>
            <a className="" href="#">
              <img src="discord-logo.png" class="icon" alt="element" />
            </a>
            <a className="" href="#">
              <img src="fb-logo.png" class="icon" alt="element" />
            </a>
            <a className="" href="#">
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
      </div>
    </>
  );
}

export default HeroSection;
