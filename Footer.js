import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link for internal routing

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;

      // Show footer when scrolled to the bottom of the page
      if (scrollTop + windowHeight >= scrollHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <FooterContainer isVisible={isVisible}>
      <FooterLinks>
        <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
        <FooterLink to="/refund-policy">Refund Policy</FooterLink>
        <FooterLink to="/website-policy">Website Policy</FooterLink>
       
        <FooterLink to="/Products">Products</FooterLink>
      
       
        <FooterLink to="/Rentals">Rentals</FooterLink>
        <FooterLink href="https://www.linkedin.com/company/rhyno-ev" target="_blank" rel="noopener noreferrer">Careers</FooterLink>
      </FooterLinks>
      <SocialIcons>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </SocialIcons>
      <Copyright>
        &copy; {new Date().getFullYear()} © 2024 Rhyno Wheels Private Limited built by Yogeshwar. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;

// Styled Components
const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #202020;
  padding: 20px;
  position: fixed;
  bottom: 0;
  width: 100%;
  transition: transform 0.3s ease, opacity 0.3s ease;
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  transform: ${({ isVisible }) => (isVisible ? 'translateY(0)' : 'translateY(100%)')};
  pointer-events: ${({ isVisible }) => (isVisible ? 'auto' : 'none')};
`;

const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 10px;
`;

const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  margin: 0 10px;
  &:hover {
    color: #f9ed32;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  a {
    color: #fff;
    font-size: 24px;
    &:hover {
      color: #f9ed32;
    }
  }
`;

const Copyright = styled.div`
  color: #fff;
  font-size: 14px;
`;
