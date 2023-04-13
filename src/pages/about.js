import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const About = () => {
  return (
    <>
      <section className="about-wrapper-1 home-wrapper-1 pt-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-md ">
              <div className="about-image-masoud py-1">
                <div class="tippy-container">
                  <Tippy content="Masoud saed/Age 33" className="tippy-1">
                <img className="img-masoud mb-4" src={"../images/mas.jpg"} alt="masoud-saed" />
                  </Tippy>
                </div>
                </div>
              <div className="circle-title mt-5">
                <h4 className="my-skill-circle">Responsive</h4>
                <h4 className="my-skill-circle">DesignSkill</h4>
                <h4 className="my-skill-circle">NPM</h4>
              </div>
              <div className="circle-title ">
                <h4 className="my-skill-circle">FrontEnd</h4>
                <h4 className="my-skill-circle">WebDesign</h4>
                <h4 className="my-skill-circle">Backend</h4>
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
      <section className="footer">
        <div className="row">
          <div className="col contact  ">
            <address className="mb-0">
              ADDRESS: 10 Maud Avenue, Bestoon Leeds, LS11 7DN.
            </address>
            <a href="http://masoudsaed918@gmail.com" className="mail">EMAIL: masoudsaed918@gmail.com</a>
            <a href="http://masoudsaed918@gmail.com" className="tel">TEL: 07546035152</a>
          </div>
        </div>
      </section>

    </>
  );
};

export default About;



