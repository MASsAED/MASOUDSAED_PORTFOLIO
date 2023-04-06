import React from 'react';
import { BsFillArrowDownCircleFill, BsGithub, BsInstagram, BsLinkedin, BsTelegram, BsTwitter } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai'


const Home = () => {
  return (
    <>
      <section className="home-wrapper-1">
        <div className="container-xxl ">
          <div className="row py-5">
            <div className="col-md ">
              <div className="main-home-wrapper-1 ">
                <h1 >Hi There,</h1>
                <h1>I'm Masoud <span>Saed</span></h1>
                <h4>I Am into <span>Web Developl</span></h4>
                <div className="main-home-button">
                  <button>About Me  <BsFillArrowDownCircleFill /></button>
                </div>
                <div class="social-home-icons">
                  <a href="#"><BsLinkedin className="social-icon" /></a>
                  <a href="#"><BsGithub className="social-icon" /></a>
                  <a href="#"><BsTwitter className="social-icon" /></a>
                  <a href="#"><BsTelegram className="social-icon" /></a>
                  <a href="#"><BsInstagram className="social-icon" /></a>
                  <a href="#"><AiOutlineMail className="social-icon" /></a>
                </div>
              </div>
            </div>
            <div class="col-md">
              <div class="main-home-wrapper-2">
                <img src={"./images/MASOUDSAED-2.jpg"} className="img-masoud" alt="masoud saed" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="footer">
        <div class="row">
          <div class="col contact  ">
            <address className="mb-0">
              ADDRESS: 10 Maud Avenue, Bestoon Leeds, LS11 7DN.
            </address>
            <a className="mail">EMAIL: masoudsaed918@gmail.com</a>
            <a className="tel">TEL: 07546035152</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
