import "./About.css";

const About = () => {
  return (
    <>
    <div className="About-Container">
    <div className="row mx-auto justify-content-center">
      <div className="col-6 pe-5 introText">
      <h1 className="mb-3">SJSU CS CLUB</h1>
      <p className="fs-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nihil aliquid nobis velit dignissimos! Vero.
        <br /><br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam dicta corporis voluptatum enim dolor.
      </p>
      </div>
      <div className="col-3 ps-4 ">
        <img src="placeholder.jpg" class="main-image" alt="club-activities"/> 
      </div>
    </div>

    <div className="mx-auto second-half">
      <h1 className=''>How Can I Get Involved?</h1>

    </div>
    
    </div>
    </>
  );
};

export default About;
