import React from 'react';
import { NavLink } from 'react-router-dom';
import Socialicon from "./Socialicon";
function Footer(props) {
    return(
    <>
    
    <footer className="site-footer text-white">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About Me</h6>
            <p className="text-justify"><i>Meticulous</i> web developer with over 2 years of front end experience and passion for making responsive websites and exploring more in web development.</p>
          </div>
         
          <div className="col ">
            <h6>Skills</h6>
            <ul className="footer-links ">
              <li><NavLink to="/c">C</NavLink></li>
              <li><NavLink to="/c++">c++</NavLink></li>
              <li><NavLink to="/java">Java</NavLink></li>
              <li><NavLink to="/react">React.js</NavLink></li>
              <li><NavLink to="/bootstrap">Bootstrap</NavLink></li>
              <li><NavLink to="/html">HTML:5</NavLink></li>
              <li><NavLink to="/css">CSS3</NavLink></li>
            </ul>
          </div>

          <div className="col">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><NavLink to="/about">About Us</NavLink></li>
              <li><NavLink to="/whyMe?">Why Me ?</NavLink></li>
              <li><NavLink to="/projects">Projects</NavLink></li>
              
            </ul>
          </div>
        </div>
        <hr />
      <Socialicon />
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-5 col-xs-12">
            <p className="copyright-text">Copyright &copy;{new Date().getFullYear()} All Rights Reserved by 
         <a href="/"> PortFolio</a>.
            </p>
          </div>

         
        </div>
      </div>
      </div>
      
</footer>

        </>
    )
};

export default Footer;

