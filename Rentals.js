import React from 'react';
import styled from 'styled-components';
import rentalImage1 from '../assets/images/third.jpeg'; // Adjust the path according to your directory structure
import rentalImage2 from '../assets/images/vehical1.jpeg'; // Adjust the path according to your directory structure
import rentalImage3 from '../assets/images/second.jpeg'; // Adjust the path according to your directory structure
import logoImage from '../assets/images/logo1.png'; // Adjust the path according to your directory structure

const Rentals = () => {
  return (
    <RentalsContainer>
      <Heading>Rentals</Heading>
      <TextSection>
        <Text>
          At Rhyno, we offer flexible rental options for our electric scooters, perfect for
          tourists and locals alike. Whether you're exploring a new city or need a reliable
          ride for your daily commute, our rental service has you covered. Our rugged yet
          elegant scooters are designed to provide a superior riding experience with safety
          and comfort in mind.
        </Text>
        <Text>
          Contact us today to learn more about our rental packages and how you can enjoy
          the freedom of riding a Rhyno EV!
        </Text>
      </TextSection>
      <ImageSection>
        <RentalBox>
          <ProductImage src={rentalImage1} alt="Electric Scooter 1" />
          <Price>$30/day</Price>
        </RentalBox>
        <RentalBox>
          <ProductImage src={rentalImage2} alt="Electric Scooter 2" />
          <Price>$35/day</Price>
        </RentalBox>
        <RentalBox>
          <ProductImage src={rentalImage3} alt="Electric Scooter 3" />
          <Price>$40/day</Price>
        </RentalBox>
      </ImageSection>
      <LogoSection>
        <LogoImage src={logoImage} alt="Company Logo" />
      </LogoSection>
      <Footer>
        <FooterText>© 2024 Rhyno Wheels Private Limited built by Yogeshwar. All rights reserved.</FooterText>
      </Footer>
    </RentalsContainer>
  );
};

export default Rentals;

const RentalsContainer = styled.div`
  padding: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors?.background || '#f9f9f9'};
`;

const Heading = styled.h1`
  font-family: ${({ theme }) => theme.fonts?.primary || 'Arial, sans-serif'};
  font-size: 32px;
  color: ${({ theme }) => theme.colors?.primary || '#007bff'};
  margin-bottom: 20px;
`;

const TextSection = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

const Text = styled.p`
  font-family: ${({ theme }) => theme.fonts?.body || 'Arial, sans-serif'};
  font-size: 16px;
  color: ${({ theme }) => theme.colors?.text || '#333'};
  margin-bottom: 15px;
  max-width: 800px;
  line-height: 1.6;
`;

const ImageSection = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 30px;
`;

const RentalBox = styled.div`
  position: relative;
  width: 200px;
  text-align: center;
  transition: transform 0.3s ease;
  border: 1px solid ${({ theme }) => theme.colors?.border || '#ccc'};
  border-radius: 8px;
  overflow: hidden;

  &:hover {
    transform: scale(1.1);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const Price = styled.p`
  font-family: ${({ theme }) => theme.fonts?.body || 'Arial, sans-serif'};
  font-size: 16px;
  color: ${({ theme }) => theme.colors?.text || '#333'};
  background-color: ${({ theme }) => theme.colors?.background || '#fff'};
  padding: 10px;
  margin: 0;
`;

const LogoSection = styled.div`
  text-align: center;
  margin: 30px 0;
`;

const LogoImage = styled.img`
  max-width: 150px;
  height: auto;
  display: block;
  margin: 0 auto;
`;

const Footer = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.colors?.footerBackground || '#333'};
  color: ${({ theme }) => theme.colors?.footerText || '#fff'};
  padding: 20px;
  text-align: center;
  position: relative;
  bottom: 0;
`;

const FooterText = styled.p`
  font-family: ${({ theme }) => theme.fonts?.body || 'Arial, sans-serif'};
  font-size: 14px;
  margin: 0;
`;
