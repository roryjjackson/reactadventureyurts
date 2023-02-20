import '../styles/components/ContactForm.css';
import '../styles/components/Main.css';
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <div class="get-in-touch">
      <div class="subheader4-container">
        <h3 id="subheader4">Don't be shy, get in touch!</h3>
      </div>
    <div class="contact-form-container">
      <div class="contact-form-socials">
        {/* <h3>Follow us</h3> */}
        <div class="socials-container">
          < FontAwesomeIcon icon={faFacebook} class="socials-link" id="fb"></FontAwesomeIcon>
          < FontAwesomeIcon icon={faInstagram} class="socials-link" id="insta"></FontAwesomeIcon>
          < FontAwesomeIcon icon={faYoutube} class="socials-link" id="yt"></FontAwesomeIcon>
        </div>
      </div>
      <div className="container m-5">
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input className="form-control" type="text" id="name" required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input className="form-control" type="email" id="email" required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="message">
              Message
            </label>
            <textarea className="form-control" id="message" required />
          </div>
          <button className="btn btn-danger" type="submit">
            {formStatus}
          </button>
        </form>
    </div>
    </div>
    </div>
  )
}
export default ContactForm
