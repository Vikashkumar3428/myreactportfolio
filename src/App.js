
import React from 'react';
import {BrowserRouter,HashRouter} from 'react-router-dom';
import Menu from './Menu';
import ScrollToTop from "react-scroll-to-top";
import Footer from './Footer';
import CARDS from './Cards';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import AOS from 'aos';
import  "aos/dist/aos.css";
import Typical from 'react-typical';
function App(props) {
  AOS.init()
  return (
    <HashRouter className="col-12 container">
   
     <Menu />
      <div className="HOME col-12 ">
         <div id="target1">
              <div className=" content text-center">
                    <h1 >Hey, I'm </h1><h1>
                    <Typical
                        steps={['Vikash', 2000, '.....!', 1000 , 'Vikash Kumar!', 1000]}
                        loop={Infinity}
                      /></h1>
                    <span className="change-content"></span>
              </div>
          </div>
      </div>
      <hr className="col-md-8 col-8 position-relative"/>
      <div className="background">
      <div id="target2" className="aboutcontent  text-center">
        
          <h1>About ME!</h1> 


      <CARDS />
      </div>
     
      <div id= "target3" className="  CV text-center  d-none d-lg-block">
          <h1 >Projects</h1> 
           <hr className="col-md-8 position-relative col-8"/> 
           <br />
           <br />
           <br />
          <div className="row text-white ">
              <div data-aos="flip-left" className="col d-flex justify-content-center ">
                <div className=" projectcontent">
                    <h1 className="fixed">Travel Management System</h1>
                    
                    <p className="fixed-bottom">Language Used:- Python</p>
                </div>
              </div>
              <div data-aos="flip-left" className="col d-flex justify-content-center">
                
              </div>
          </div>

          <br />
          <br />
          <div className="row  text-white">
          <div data-aos="flip-right" className="col d-flex justify-content-center">
            <div >
            </div>
          </div>
          <div data-aos="flip-right" className="col d-flex justify-content-center">
            <div className=" projectcontent">
            <h1 className="fixed">Examination System</h1>
                    
                    
                    <p className="fixed-bottom">Language Used:- Java</p>
            </div>
          </div>
      </div>

      <div className="row text-white">
              <div data-aos="flip-left" className="col d-flex justify-content-center">
                <div className=" projectcontent">

                <h1>Ice Cream Parlour Management</h1>
                
                <p className="fixed-bottom">Language Used:- C++</p>
                </div>
              </div>
              <div data-aos="flip-left" className="col d-flex justify-content-center">
                
              </div>
          </div>


      <div className="row text-white">
          <div data-aos="flip-right" className="col d-flex justify-content-center">
            <div >
            </div>
          </div>
          <div data-aos="flip-left" className="col d-flex justify-content-center">
            <div className=" projectcontent"><br />
                
            <h1>Portfolio</h1>
                
                <p className="fixed-bottom">Language Used:- React.js</p>
            </div>
          </div>
      </div>
          
      </div>
        
       <br />
       <br />
       <br />
       <br />
      
      <hr className="col-md-10 col-8 position-relative"/>
      <hr className="col-md-10 col-8 position-relative"/>
      <div className="card2 align-center">
        
        </div>
          
        <div id="target5" className="skils text-center text-white position-relative ">
            <h1 style={{fontSize:'4vw'}}>Skills</h1>
            <div class="circle1">
            <a href="https://www.w3schools.com/html/"><div class="circle-content">HTML</div></a>
            </div>
            <div class="circle2">
            <a href="https://www.w3schools.com/css/"><div class="circle-content">CSS</div></a>
            </div>
            <div class="circle3">
            <a href="https://reactjs.org/"><div class="circle-content">React.js</div></a>
            </div>
            <div class="circle4">
            <a href="https://getbootstrap.com/"><div class="circle-content">Bootstrap</div></a>
            </div>
            <div class="circle5">
            <a href="https://www.geeksforgeeks.org/c-programming-language/"><div class="circle-content">C</div></a>
            </div>
            <div class="circle6">
            <a href="https://www.geeksforgeeks.org/c-plus-plus/"><div class="circle-content">C++</div></a>
            </div>
            <div class="circle7">
            <a href="https://www.tutorialspoint.com/java/java_overview.htm"><div class="circle-content">Java</div></a>
            </div>
            <br />
           <div className="vertical"></div>
           
         </div>


     <div id="target4" className="contact text-center text-white position-relative ">
     <hr className="col-md-8 col-8"/>
             <Footer />
            </div>
    </div>
    <ScrollToTop/>
    </HashRouter>
  );
};

export default App;
