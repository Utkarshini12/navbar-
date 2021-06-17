import React, { useState, useEffect } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  
} from 'reactstrap';


import CountDownTimer from './Timer';
import Modal from './Modal'
import logo from '../assets/logo.png'


const Example = (props) => {


    const hoursMinSecs = {hours:0, minutes: 10, seconds: 0}
  // const [counter, setCounter] = React.useState(100);
  
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);


  // React.useEffect(() => {
  //   const timer =
  //     counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
  //   return () => clearInterval(timer);
  // }, [counter]);




  
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand  href="/">
          <img src={logo} height={50} />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} alt="logo"/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/post/">Post</NavLink>
            </NavItem>
           
            
          </Nav>
         <CountDownTimer hoursMinSecs={hoursMinSecs}/>
          
         
          <Modal />
        </Collapse>
      </Navbar>

      
    </div>
  );
}
export default Example;