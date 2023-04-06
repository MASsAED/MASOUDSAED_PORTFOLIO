import React from 'react'
import { AiOutlineChrome, AiOutlineHome, AiOutlineInfoCircle, AiOutlineMail } from 'react-icons/ai'
import { BiPhoneCall } from 'react-icons/bi'

const Contact = () => {
  return (
    <>
      <div className="contact-wrapper home-wrapper-2 py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18851.757882808277!2d-1.5655178732429795!3d53.7989247248657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48795c1e046c24a9%3A0x716fc89a6553a7e4!2sLeeds%20City%20Centre%2C%20Leeds!5e0!3m2!1sen!2suk!4v1680040558690!5m2!1sen!2suk" width="600" height="450" className="border-0 w-100" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between ">
                <div>
                  <h3 className="contact-title mb-4">Contact</h3>
                  <form action="" className="d-flex flex-column gap-20">
                    <div>
                      <input type="text" className="form-control" placeholder="Name" />
                    </div>
                    <div>
                      <input type="email" className="form-control" placeholder="Email" />
                    </div>
                    <div>
                      <input type="tel" className="form-control" placeholder="Mobile Number" />
                    </div>
                    <div>
                      <textarea
                        type="text"
                        className="form-control w-100"
                        placeholder="Comments"
                        id=""
                        cols="30"
                        rows="4"
                        name=""
                      ></textarea>
                    </div>
                    <div>
                      <button className="button border-0">Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Get in touch with us</h3>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
