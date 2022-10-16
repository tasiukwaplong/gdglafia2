import React from "react";
import "./contact.css";
import { FaTwitter, FaMeetup, FaFacebook } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="contact-compoment">
      <div className="contact__container">
        <p className="contact__heading">Contact GDG Lafia</p>
        <p className="contact__article">
          Our events are open to newbies, developers, managers, and
          organizations who are interested in Google's technologies or use them
          as part of their projects.
        </p>
        <div className="contact__social">
          <p className="contact__social-heading">social medial:</p>
          <div className="contact__icons">
            <a href="#" target="_blank">
              <FaMeetup />
            </a>
            <a href="#" target="_blank">
              <FaFacebook />
            </a>
            <a href="#" target="_blank">
              <FaTwitter />
            </a>
          </div>
        </div>
        <p className="contact__question">
          Questions? Please contact <span>gdgLafia@gmail.com.</span>
        </p>
      </div>
    </div>
  );
};

export default Contact;
