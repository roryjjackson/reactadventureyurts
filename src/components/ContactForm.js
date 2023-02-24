import '../styles/components/ContactForm.css';
import '../styles/components/Main.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_USER_ID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <div id="contact" class="get-in-touch">
      <div class="subheader4-container">
        <h3 id="subheader4">Don't be shy, get in touch!</h3>
      </div>
      <div class="contact-form-container">
        <div class="contact-form-socials">
          <div class="socials-container">
            < FontAwesomeIcon icon={faFacebook} class="socials-link" id="fb"></FontAwesomeIcon>
            < FontAwesomeIcon icon={faInstagram} class="socials-link" id="insta"></FontAwesomeIcon>
            < FontAwesomeIcon icon={faYoutube} class="socials-link" id="yt"></FontAwesomeIcon>
          </div>
        </div>
        <div className="container m-5">
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-3">
              <label className="form-label">
                Name
              </label>
              <input className="form-control" type="text" id="name" name="user_name" required />
            </div>
            <div className="mb-3">
              <label className="form-label">
                Email
              </label>
              <input className="form-control" type="email" id="email" name="user_email" required />
            </div>
            <div className="mb-3">
              <label className="form-label">
                Message
              </label>
              <textarea className="form-control" id="message" name="message" required />
            </div>
            <button className="btn btn-danger" type="submit" value="send">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default ContactForm
