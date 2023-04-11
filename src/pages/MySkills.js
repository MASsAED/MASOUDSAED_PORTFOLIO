import React from 'react';
import ChartSkills from '../components/Chart';
// import Chartta from '../components/Pchart';

const MySkills = () => {
  return (
    <>
      <div className="my-skills-wrapper-1">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="my-skills-title mt-5 mb-5">
                <h2>My Skills</h2>
                <p>I Like To Craft Beautiful And Scalable Web Products</p>
              </div>
            </div>
            <div className="col-md mt-0">
              <div className="my-skills-title">
                <div className="my-skills-img">
                  <img src={"./images/brush-icon.png"} alt="brush-icon"/>
                </div>
                <h4>Design + Development</h4>
                <p>Clean, modern designs - optimized for performance, search engines, and converting users to customers.</p>
              </div>
              <div className="my-skills-title">
                <div className="my-skills-img">
                  <img src={"./images/tag-icon.png"} alt="tag-icon" />
                </div>
                <h4>Technology</h4>
                <p>Combined all the latest technologies to a progressive website.</p>
              </div>
              <div className="my-skills-title">
                <div className="my-skills-img">
                  <img src={"./images/responsive-icon.png"} alt="brush-icon" />
                </div>
                <h4>Always Responsive</h4>
                <p>A responsive design makes your website accessible to all users, regardless of their device.</p>
              </div>
            </div>
            <div className="col-md chart mt-0">
              <div className="twochart">
              <ChartSkills />
                {/* <Chartta /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
  )
}

export default MySkills