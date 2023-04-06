import React from 'react';
import { BsPersonWorkspace }from 'react-icons/bs'
import { GiStarsStack }from 'react-icons/gi'
import { SiAffinitydesigner }from 'react-icons/si'

const Education = () => {
  return (

    <section className="education-wrapper ">
      <div className="container-xxl ">
        <div className="row py-5">
          <section className="education-wrapper-1 mt-5">
            <div className="row">
              <div className="col-md">
                <div className="high-school">
                  <h3>High School</h3>
                  <p>I graduated from high school with a degree in general computer repair, along with that course I completed two more courses and got a degree in general electronics and computer software.</p>
                  <img src={"../images/high-school.png"} alt="high school" className="mt-4" />
                </div>
              </div>
              <div className="col-md">
                <div className="high-school">
                  <h3>Associate Degree</h3>
                  <p>My two-year Associate course in computer software was completed, during which the course was spent with programming languages such as Assembly, pascal, C, C++ and databases such as SQL, etc.</p><br /><br /><br />
                  <img src={"../images/college-degree-icon.png"} alt="Associate-degree-icon" className="mt-5" />
                </div>
              </div>
              <div className="col-md">
                <div className="high-school">
                  <h3>Bachelor's degree</h3>
                  <p>Two years of my bachelor's degree were mostly spent on programs such as C, Java, C#, Jamla, and WordPress. It should be noted that the mentioned programming languages were not completed in half due to the short semesters.</p>
                  <img src={"../images/Bachelor-degree.png"} alt="Bachelor-degree-icon" className="mt-4" />
                </div>
              </div>
            </div>
          </section>
            <div className="education-content">
          <div className="col-md edu m-5">
            <div className="education-content-1">
              <div className="education-content-icon">
              <BsPersonWorkspace />
                </div>
              </div>
              <div className="cross-industry-experience">
                <div class="title-education">
                  <h5 className="mb-5 text-center text-warning">Cross-Industry Experience</h5>

                </div>
                  <p>Before web development, I was worked as computer Technician, in few company, and Digital Marketer. My background gives me versatility and flexibility.</p>
                </div>
          </div>
          <div className="col-md edu m-5">
            <div className="education-content-2">
              <div className="education-content-icon">
                  <GiStarsStack />
                </div>
            </div>
                <div className="full-stack-development">
                <div class="title-education">
                  <h5 className="mb-5 text-center text-warning">Full Stack Development</h5>
                </div>
                <p>for me. it's important to know all sides of the web development process. I'll learn whatever technology will help me build apps that improve lives.</p>
                </div>
          </div>
          <div className="col-md edu m-5">
            <div className="education-content-3">
              <div className="education-content-icon">
                  <SiAffinitydesigner />
                </div>
            </div>
              <div className="design-focused">
                <div class="title-education">
                  <h5 className="mb-5 text-center text-warning">Design Focused</h5>
                </div>
                <p> I like making websites look pretty. I know that good design is just as important as good development. I work with illustrator and Photoshop. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
