import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

// Import your theme
import { theme } from '../assets/styles/theme'; // Adjust the path based on your directory structure

// Import Images
import logo from "C:/Users/yoges/rhyno-ev/src/assets/images/logo1.png";

// Navbar Component
const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Nav>
        <Logo src={logo} alt="RHYNO EV Logo" />
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Aboutus">About Us</NavLink>
          <Dropdown onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
            <DropdownLink to="#">Products</DropdownLink>
            {showDropdown && (
              <DropdownMenu>
                <DropdownItem to="/Product1">SE03 Lite</DropdownItem>
                <DropdownItem to="/Product2">SE03</DropdownItem>
                <DropdownItem to="/Product3">SE03 Max</DropdownItem>
              </DropdownMenu>
            )}
          </Dropdown>
          <NavLink to="/ContactUs">Contact Us</NavLink>
          <NavLink to="/Rentals">Rentals</NavLink>
          <NavLink to="/CompareAll">Compare All</NavLink>
        </NavLinks>
        <SocialIcons>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </SocialIcons>
      </Nav>
    </ThemeProvider>
  );
};

export default Navbar;

// Styled Components
const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.85); /* Semi-transparent background */
  backdrop-filter: blur(10px); /* Frosted glass effect */
  padding: 0.3125px 0.625px;
  z-index: 1000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2); /* Optional: adds a subtle border */
`;

const Logo = styled.img`
  height: 62.5px;
  width: auto;
  margin-right: 21.875px;
  margin-left: 18.75px;
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 19px;
  margin: 0 8px;
  &:hover {
    color: #f9ed32;
  }
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 19px;
  margin: 0 8px;
  &:hover {
    color: #f9ed32;
  }
`;

const DropdownMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  background: rgba(0, 0, 0, 0.7); /* Semi-transparent background */
  backdrop-filter: blur(10px); /* Frosted glass effect */
  padding: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2); /* Optional: adds a subtle border */
  z-index: 1000;
`;

const DropdownItem = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  margin: 5px 0;
  &:hover {
    color: #f9ed32;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
  margin-right: 54.6875px;
  
  a {
    color: #fff;
    font-size: 25px;
    &:hover {
      color: #f9ed32;
    }
  }
`;
