import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook,faTwitter,faInstagram,faLinkedin,faGithub} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function SocialFollow() {
  return (
    <div className="social-container ">
      <a
        href="https://www.facebook.com/vikash.aroma"
        className="facebook social"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      
        
        <a href="https://twitter.com/VikashK10673469" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      
      <a href="https://www.linkedin.com/in/vikash-kumar-b94847190/" className="linkedin social">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a
        href="https://www.instagram.com/v_kumar3428/"
        className="instagram social"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a
        href="https://github.com/Vikashkumar3428"
        className="github social"
      >
      <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a href="mailto:vkumar3428@gmail.com" target="_blank" rel="noopener noreferrer" className="gmail social">
        <FontAwesomeIcon icon={faEnvelope} size="2x" />
      </a>
    </div>
  );
}
