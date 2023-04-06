import React, { useState } from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';
// import styled from 'styled-components';


const Navbar = () => {

  return (
    <>
      <Nav>
        <NavLink to="/">
          <div>
            <img src={"./images/logo.png"} alt="logo" className="logo" />
          </div>
        </NavLink>
        <Bars />
        <NavMenu >
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/projects' activeStyle>
            Projects
          </NavLink>
          <NavLink to='/education' activeStyle>
            Education
          </NavLink>
          <NavLink to='/contact' activeStyle>
            Contact
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
