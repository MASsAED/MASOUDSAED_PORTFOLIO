import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

// import React from 'react'
import { AiOutlineChrome, AiOutlineInfoCircle, AiOutlineMail } from 'react-icons/ai'
import { BiPhoneCall } from 'react-icons/bi'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ulz4j53', 'template_tt26un9', form.current, 'fqMd50daipetSwZj9')
      .then((result) => {
        console.log(result.text);
        console.log("Message Sent");
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <>
      <section className="contact-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18851.757882808277!2d-1.5655178732429795!3d53.7989247248657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48795c1e046c24a9%3A0x716fc89a6553a7e4!2sLeeds%20City%20Centre%2C%20Leeds!5e0!3m2!1sen!2suk!4v1680040558690!5m2!1sen!2suk" width="500" height="400" className="border-0 w-100" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
      </section>
        <section className="contact-wrapper-2 ">
        <div className="container-xxl">
          <div className="row">
              <div className="col-md container  ">
                    <h3 className="contact-title ">Contact</h3>
                    <form  className="form" ref={form} onSubmit={sendEmail}>
                      <div className="form-group">
                        <label for="name" className="form-label">Your Name</label>
                        <input type="text" className="form-control " name="user_name" placeholder="Jane Doe" tabindex="1" />
                      </div>
                      <div className="form-group">
                        <label for="email" className="form-label">Your Email</label>
                        <input type="email" className="form-control" id="email" name="user_email" placeholder="jane@doe.com" tabindex="2"   />
                      </div>
                      <div className="form-group">

                        <label for="subject" className="form-label">Subject</label>
                        <input type="text" className="form-control" id="subject" name="subject" placeholder="Hello There!" tabindex="3"   />
                      </div>
                      <div className="form-group">
                        <label for="message" className="form-label">Message</label>
                        <textarea className="form-control " rows="5" cols="50" id="message" name="message" placeholder="Enter Message..." tabindex="4"></textarea>
                      </div>
                      <div>
                  <button className="btn" type="submit" >Send Message!</button>
                      </div>
              </form>
              </div>
                <div className="col-md container">
                  <h3 className="contact-title mb-5">Get in touch with us</h3>
                  <div>
                    <ul>
                      <li className="mb-3 d-flex align-items-center gap-15">
                        <AiOutlineChrome className="fs-5 " />
                        <address className="mb-0">10 Maud Avenue, Leeds, Uk.</address>
                      </li>
                      <li className="mb-3 d-flex align-items-center gap-15">
                        <BiPhoneCall className="fs-5" />
                        <a href="tel:+447546035152">(+44)754-603-5152</a>
                      </li>
                      <li className="mb-3 d-flex align-items-center gap-15">
                        <AiOutlineMail className="fs-5" />
                        <a href="mailto:masoudsaed918@gmail.com">masoudsaed918@gmail.com</a>
                      </li>
                      <li className="mb-3 d-flex align-items-center gap-15">
                        <AiOutlineInfoCircle className="fs-5" />
                        <p className='mb-0'>Monday - Friday 10 AM - 8 PM </p>
                      </li>
                    </ul>
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

export default Contact;
