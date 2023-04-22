import React, { useState, useEffect } from 'react';
import { BsFillArrowDownCircleFill, BsGithub, BsInstagram, BsLinkedin, BsTelegram, BsTwitter } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai'
import Popup from '../components/Popup';
import { ColorChangingElement } from '../components/gColors';
import $ from 'jquery';


const Home = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [timedPopup, setTimedPopup] = useState(false);
  const [colorFlow, setColorFlow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true);
    }, 5000);
  }, []);

  setTimeout(() => {
    setColorFlow(true);
      $('.greeting').css('color', "blue");
    }, 5000);
    



  return (
    <>
      <section className="home-wrapper-1">
        <div className="container-xxl ">
          <div className="row py-5">
            <div className="col-md ">
              <div trigger={colorFlow} setTrigger={setColorFlow} className="main-home-wrapper-1 greeting ">
                <ColorChangingElement  className="home-greeting"/>
               
                <div className="main-home-button">
                  <button>About Me  <BsFillArrowDownCircleFill /></button>
                </div>
                <div class="social-home-icons">
                  <a href="https://www.linkedin.com/in/masoud-saed-39507826a/"><BsLinkedin className="social-icon" /></a>
                  <a href="https://github.com/MASsAED?tab=stars"><BsGithub className="social-icon" /></a>
                  <a href="https://twitter.com/MASOUDSAED89"><BsTwitter className="social-icon" /></a>
                  <a href="https://t.me/MASOUD_SAED89"><BsTelegram className="social-icon" /></a>
                  <a href="https://www.instagram.com/masoud_saed89/"><BsInstagram className="social-icon" /></a>
                  <a href="https://masoudsaed918@gmail.com"><AiOutlineMail className="social-icon" /></a>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="main-home-wrapper-2">
                <img src="./images/mas.jpg" alt="masoud saed" className="img-masoud" />
              
              </div>
              <div className="home-popup main-home-wrapper-2 mt-3">
                <button className="button " onClick={() => setButtonPopup(true)}>My Message</button>
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
            <a href="http://masoudsaed918@gmail.com" className="tel">Tel:(+44)754-603-5152</a>
            <a href="http://masoudsaed918@gmail.com" className="mail">Email: masoudsaed918@gmail.com</a>
            <address className="mb-0">
              Address: 10 Maud Avenue, Beeston Leeds, LS11 7DN.
            </address>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;


