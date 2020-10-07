import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav} from 'react-bootstrap';
import {Link} from 'react-scroll';

class Menu2 extends Component {
    render () {
        return (
            

         <div className="header">
                    <Navbar bg="dark" expand="lg">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="m-auto">
                                
                            <ul className="nav navbar-nav">
                            <li className="nav-item">
                                <Link to="target1"
                                            spy={true}
                                            smooth={true}
                                            offset={50}
                                            duration={500}
                                            delay={500}
                                            className="nav-link fa fa-home text-white text-uppercase mr-5" 
                                            >&nbsp; Home<span class="sr-only">(current)</span></Link>
                                        </li>
                                        <li className="nav-item">
                                <Link to="target2"
                                            spy={true}
                                            smooth={true}
                                            
                                            offset={50}
                                            duration={500}
                                            delay={500}
                                            
                                            className="nav-link fa fa-user text-white text-uppercase mr-5" 
                                            >&nbsp; About</Link>
                                        </li>

                                        <li className="nav-item">
                                <Link to="target3"
                                            spy={true}
                                            smooth={true}
                                            
                                            offset={50}
                                            duration={500}
                                            delay={500}
                                            
                                            className="nav-link fa fa-code text-white text-uppercase mr-5" 
                                            >&nbsp; Projects</Link>
                                        </li>
                                        <li className="nav-item">
                                <Link to="target4"
                                            spy={true}
                                            smooth={true}
                                            
                                            offset={50}
                                            duration={500}
                                            delay={500}
                                            
                                            className="nav-link fa fa-phone text-white text-uppercase mr-5" 
                                            >&nbsp; Contact</Link>
                                        </li>
                                        <li className="nav-item">
                                <Link to="target5"
                                            spy={true}
                                            smooth={true}
                                            
                                            offset={50}
                                            duration={500}
                                            delay={500}
                                            
                                            className="nav-link fa fa-cogs text-white text-uppercase mr-5" 
                                            >&nbsp; Skills</Link>
                                        </li>
                        
                            </ul>
                            </Nav>
                        </Navbar.Collapse>
                </Navbar>
        </div>
    
        );
    };
};
export default Menu2;