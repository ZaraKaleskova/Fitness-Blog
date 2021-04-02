import emailjs from "emailjs-com";
import React from "react";
import ContactInfo from './ContactInfo';

const Footer = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kcd5gms",
        "template_1va3foe",
        e.target,
        "user_2x6ewZiOj0mHbbt8GcG6r"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <section id="footer">
      <div className="inner">
        <h2 className="major">Get in touch</h2>
        <p>
          Send a quick message about training plans, nutritional programs or any
          other inquiry. You can also give a call the number below for more
          information or potential partnerships.
        </p>
        <form onSubmit={sendEmail}>
          <div className="fields">
                    <div className="field">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" />
                    </div>
                    <div className="field">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" name="subject" id="subject" />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="4"></textarea>
                    </div>
                </div>
                <ul className="actions">
                    <li><input type="submit" value="Send Message" /></li>
                </ul>     
        </form>
        <ContactInfo />
      </div>
    </section>
  );
};

export default Footer;
