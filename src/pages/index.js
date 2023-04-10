import React, { useState, useEffect } from 'react';
import { BsFillArrowDownCircleFill, BsGithub, BsInstagram, BsLinkedin, BsTelegram, BsTwitter } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai'
import AlertDismissible from '../components/Alert';
import Popup from '../components/Popup';

const Home= () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [timedPopup, setTimedPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true);
    }, 5000);
  }, []);

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
                  <a href="https://www.linkedin.com/in/masoud-saed-39507826a/"><BsLinkedin className="social-icon" /></a>
                  <a href="https://github.com/MASsAED?tab=stars"><BsGithub className="social-icon" /></a>
                  <a href="https://twitter.com/MASOUDSAED89"><BsTwitter className="social-icon" /></a>
                  <a href="https://t.me/MASOUD_SAED89"><BsTelegram className="social-icon" /></a>
                  <a href="https://www.instagram.com/masoud_saed89/"><BsInstagram className="social-icon" /></a>
                  <a href="#"><AiOutlineMail className="social-icon" /></a>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="main-home-wrapper-2">
                <div>

                </div>
                <img src={"./images/MASOUDSAED-2.jpg"} className="img-masoud" alt="masoud saed" />
              </div>
              <div className="home-popup main-home-wrapper-2 mt-3">
                <button className="button" onClick={() => setButtonPopup(true)}>My Message</button>
                <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                  <p>this is my message</p>
                </Popup>
                <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
                </Popup>
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
            <a className="mail">EMAIL: masoudsaed918@gmail.com</a>
            <a className="tel">TEL: 07546035152</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
