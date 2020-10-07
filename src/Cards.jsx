import React from  'react';
import {Row ,Col,Button,Card, Container} from "react-bootstrap";
import Pdf from './Resume.pdf';
function cards() {

    return (
      
        
        <Container >
        <Row className="pt-3 pb-5 align-items-center">
           
            <Col md={12}>
              <Row className="card-div align-items-start p-2  rounded">
              <Card className="my-details align-items-center bg-dark text-white" style={{ width: '100rem', height: '28rem' , paddingbottom :'2rem' ,padding:'2rem'}}>
             
                Hi there! I am <strong>&nbsp;VIKASH KUMAR</strong>
                <br />A passionate web developer born and brought up in India. I am a Web Developer with React.js as my tech stack.
                <br />
                Currently I am pursuing B.Tech from Lovely Professional University.
                <br />
                Along with that, I love learning about new technologies, How problems are getting solved, How to use, build better and scalable products.
                <br /> <br /> 
                <Row >
                <Button className="mx-2"><a className="buton text-white " href="https://www.linkedin.com/in/vikash-kumar-b94847190/">LinkedIn</a></Button>
                <Button className="mx-2 bg-success" href = {Pdf}><a  className="buton text-white "  target = "_blank">Resume</a> </Button>
                <Button className="mx-2 bg-dark "><a className="buton text-white" href="https://github.com/Vikashkumar3428">GitHub</a></Button>
                </Row>
              </Card>
              </Row>
            </Col>
          </Row>
         
</Container>
        
    );
}
export default cards;