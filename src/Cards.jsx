import React from  'react';
import {Row ,Col,Button,Card, Container} from "react-bootstrap";
import Pdf from './Resume.pdf';
function cards() {

    return (
      
        
        <Container className="pt-3 pb-5 align-items-center" >
        
           
            <div >
              <div className="card-div rounded">
                  <Card className="my-details bg-dark text-white" >
   
                    Hi there! I am <strong >&nbsp;VIKASH KUMAR</strong>
                    <br />A passionate web developer born and brought up in India. I am a Web Developer with React.js as my tech stack.
                    <br />
                    Currently I am pursuing B.Tech from Lovely Professional University.
                    <br />
                    Along with that, I love learning about new technologies, How problems are getting solved, How to use, build better and scalable products.
                    <br /> <br /> 
              <div >
              <Button className="mx-1 col-md-3 col-lg-2 mb-3 col-7 mb-md-0"><a className="buton text-white px-0" href="https://www.linkedin.com/in/vikash-kumar-b94847190/">LinkedIn</a></Button>
              <Button className="mx-1 bg-success col-md-3  col-lg-2 col-7 mb-3 mb-md-0" href = {Pdf}><a  className="buton text-white "  target = "_blank">Resume</a> </Button>
              <Button className="mx-1 bg-dark col-md-3 mb-3 col-lg-2 col-7 mb-md-0"><a className="buton text-white" href="https://github.com/Vikashkumar3428">GitHub</a></Button>
                </div>
              </Card>
        </div>
            </div>
   
         
</Container>
        
    );
}
export default cards;