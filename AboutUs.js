import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

// Ensure you import the theme correctly
import { theme } from '../assets/styles/theme'; // Adjust the path based on your directory structure

const AboutUs = () => {
  return (
    <ThemeProvider theme={theme}>
      <AboutUsContainer>
        <Heading>About Us</Heading>
        <Text>
          Established in 2019 by an automotive engineer with a vision for sustainable and robust
          mobility solutions, Rhyno EV is not just a company; it's a collective effort of a dynamic team
          of young individuals passionately driving innovation in the electric vehicle industry.
        </Text>
        <Text>
          With our first product, we've taken a bold step to create something more than just a vehicle;
          it's a unique experience of elegance, comfort, and style, addressing the pitfalls of
          conventional electric scooters.
        </Text>
        <Text>
          Our design prioritizes safety, eliminating concerns of fires and ensuring a longer battery
          lifespan with our advanced battery technology. Perfectly suited for fleet operators,
          especially in tourist-centric locations like Goa, our rugged yet aesthetically appealing
          scooters are engineered for longevity and reliability.
        </Text>
        <Text>
          Join us as we pioneer a new era in sustainable and dependable electric transportation.
        </Text>
      </AboutUsContainer>
    </ThemeProvider>
  );
};

export default AboutUs;

// Styled Components
const AboutUsContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px; /* Adjust this value based on the height of your Navbar */
`;

const Heading = styled.h1`
  font-family: ${({ theme }) => theme.fonts?.primary || 'Arial, sans-serif'};
  font-size: 32px;
  color: ${({ theme }) => theme.colors?.black || '#000'};
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-family: ${({ theme }) => theme.fonts?.body || 'Arial, sans-serif'};
  font-size: 16px;
  color: ${({ theme }) => theme.colors?.text || '#333'};
  text-align: center;
  margin-bottom: 15px;
  max-width: 800px;
`;
