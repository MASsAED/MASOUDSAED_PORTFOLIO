import React from 'react'
import DarkVariantExample from '../components/carousel'

const Projects = () => {
  return (
    <>
      <div className="projects-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-md project-qa">
              <h5>Why is it important for Me to work with multiple web development projects?</h5>
              <div className="answer">
                <p>
                  Learning to build a variety of web projects helps prepare you to handle anything. It’s impossible to master every language or back-end framework. But exposing yourself to different project types and languages enables you to refine the most important skill a developer can have, problem-solving.
                </p>
                <div>
                  <ul className="list-unstyled text-secondary">
                    <li>Student Result Management System</li>
                    <li> Customer Relationship Management System</li>
                    <li>Multiplayer Games</li>
                    <li>Resume Builder</li>
                    <li>To-do Web App</li>
                    <li>WhatsApp Web Clone</li>
                    <li>Weather Forecasting App</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md d-flex justify-content-center ">
              <div className="slidshow">
                <div className="mt-5">
                  <h2>I like to craft solid and scalable frontend, backend products with user experiences!</h2>
                </div>
                
                <DarkVariantExample />
                <div className="mt-5 text-center">
                  <h5>Few Project more then 60% Done!</h5>
                  <h6>Click on Project</h6>
                </div>
              </div>
            </div>
            <div className="col-md project-qa">
              <h5>
                What skills am I have and What skills I Like To Learn in the Future as web developer?
              </h5>
              <div className="answer">
                <p>HTML
                  CSS
                  JavaScript
                  Using version control software like GitHub
                  bootstrap
                  react, etc.
                  I would Like to learn more Back-end programming C#, Java, and Python. Functional languages widely in use by web developers. I already know how to work with PHP And Python and I Like to use them for my Project to learn more.
                  Please click the button to see what I now about web development !
                </p>
              </div>
              <a href="/my-skills" className="text-warning">Check My Skills Here</a>
            </div>
            <div className="col-12"></div>
          </div>
        </div>
      </div>
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
  )
}

export default Projects