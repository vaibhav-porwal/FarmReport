import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
       
        <Bars />
        <NavMenu>
        <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Contact Us
          </NavLink>
        

        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/login'>SignIn</NavBtnLink>
          <NavBtnLink to='/sign-up'>Register</NavBtnLink>
        </NavBtn>
   
         
       
      </Nav>
    </>
  );
};

export default Navbar;