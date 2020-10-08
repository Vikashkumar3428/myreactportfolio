import React from  'react';
import {Row ,Col,Button,Card, Container} from "react-bootstrap";
import Pdf from './Resume.pdf';
function cards() {

    return (
      
        
        <Container className="pt-3 pb-5 align-items-center" >
        
           
            <Col >
              <div className="card-div rounded">
                  <Card className="my-details  bg-dark text-white" >
                
                    Hi there! I am <strong >&nbsp;VIKASH KUMAR</strong>
                    <br />A passionate web developer born and brought up in India. I am a Web Developer with React.js as my tech stack.
                    <br />
                    Currently I am pursuing B.Tech from Lovely Professional University.
                    <br />
                    Along with that, I love learning about new technologies, How problems are getting solved, How to use, build better and scalable products.
                    <br /> <br /> 
              <div >
                <Button className="mx-2 "><a className="buton text-white " href="https://www.linkedin.com/in/vikash-kumar-b94847190/">LinkedIn</a></Button>
                <Button className="mx-2 bg-success " href = {Pdf}><a  className="buton text-white "  target = "_blank">Resume</a> </Button>
                <Button className="mx-2 bg-dark"><a className="buton text-white" href="https://github.com/Vikashkumar3428">GitHub</a></Button>
                </div>
              </Card>
        </div>
            </Col>
   
         
</Container>
        
    );
}
export default cards;