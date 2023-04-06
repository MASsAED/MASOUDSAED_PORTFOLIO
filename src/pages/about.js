import React from 'react';

const About = () => {
  return (
    <>
      <section className="about-wrapper-1 home-wrapper-1 pt-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-md ">
              <div className="about-image-masoud py-5">
                <img className="img-masoud" src={"../images/mas.jpg"} alt="masoud-saed-image" />
              </div>
              <div className="circle-title">
                <h4 className="my-skill-circle-1">Responsive</h4>
                <h4 className="my-skill-circle-2">DesignSkill</h4>
                <h4 className="my-skill-circle-3">NPM</h4>
              </div>
              <div className="circle-title ">
                <h4 className="my-skill-circle-3">FrontEnd</h4>
                <h4 className="my-skill-circle-4">WebDesign</h4>
                <h4 className="my-skill-circle-5">Backend</h4>
              </div>
            </div>
            <div className="col-md">
              <div className="about-interduction">
                <div className="intro py-5">
                  <h1>Hello,</h1>
                  <h2>a bit about me:</h2>
                </div>
                
              </div>
              <div className="description-about-me">
                <p>Welcome to my Digital Portfolio. This website depicts some of the work that I have completed throughout full stack developments course. it displays the growth and the progress that i have made, as well as the assignments I am most proud of, Over the past four months, I have put time, energy, and efford into my tasks and have learned more then ever because of it. Reflecting on my work has shown me how far i have come as both a student, and a person.</p>
              </div>
              </div>
            </div>
          </div>

      </section>

    </>
  );
};

export default About;



