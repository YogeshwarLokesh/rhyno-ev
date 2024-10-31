import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

// Import your theme
import { theme } from '../assets/styles/theme'; // Adjust the path based on your directory structure

// Import Images and Videos
import vehicleImage1 from '../assets/images/third.jpeg'; // Use relative path
import vehicleImage2 from '../assets/images/vehical1.jpeg';
import vehicleImage3 from '../assets/images/second.jpeg'; // Corrected image path
import sampleVideo from '../assets/images/back.mp4';
import sampleVideo2 from '../assets/images/video2.mp4'; // Adjust the path based on your directory structure

// Import Components
import Navbar from 'C:/Users/yoges/rhyno-ev/src/components/Navbar.js'; // Adjust the path based on your directory structure
import Footer from 'C:/Users/yoges/rhyno-ev/src/components/Footer.js'; // Adjust the path based on your directory structure

// Define Navbar height
const NavHeight = '70px'; // Define the height of the navbar

// Styled Components
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  overflow-x: hidden; /* Prevents horizontal scrolling */
  margin-top: ${NavHeight}; /* Start below the navbar */
`;

const CompanyInfoSection = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 40px;
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const CompanyInfoText = styled.h2`
  font-size: 36px;
  font-family: ${({ theme }) => theme.fonts.secondary};
  margin-bottom: 20px;
`;

const ProductsSection = styled.section`
  width: 100vw; /* Full width */
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px; /* Reduced margin bottom */
  padding: 0 20px; /* Adds some padding to the sides */
`;

const ProductBox = styled.div`
  width: 30%;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.darkGrey};
  border-radius: 8px;
  padding: 15px; /* Reduced padding */
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 10px; /* Reduced margin bottom */
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const ProductTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 18px; /* Slightly smaller font size */
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 5px; /* Reduced margin bottom */
`;

const ProductDescription = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 14px; /* Slightly smaller font size */
  color: ${({ theme }) => theme.colors.text};
`;

const FloatingButton = styled.button`
  position: fixed;
  bottom: 20px; /* Reduced bottom position */
  right: 20px; /* Reduced right position */
  padding: 10px 20px; /* Reduced padding */
  background-color: ${({ theme }) => theme.colors.yellow};
  border: none;
  font-size: 16px; /* Slightly smaller font size */
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkGrey};
  }
`;

const USPSection = styled.section`
  width: 100vw; /* Full width */
  max-width: 800px;
  margin-bottom: 20px; /* Reduced margin bottom */
`;

const USPItem = styled.div`
  text-align: center;
  padding: 15px; /* Reduced padding */
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.darkGrey};
  border-radius: 8px;
`;

const USPTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 18px; /* Slightly smaller font size */
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 5px; /* Reduced margin bottom */
`;

const USPText = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 14px; /* Slightly smaller font size */
  color: ${({ theme }) => theme.colors.text};
`;

const VideoSection = styled.section`
  width: 100vw;
  height: 500px; /* Reduced height */
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000; /* Fallback background color */
  margin-bottom: 100px; /* Increased margin bottom for space before footer */
`;

const Video = styled.video`
  width: 100vw;
  height: auto;
  max-height: 100%;
  object-fit: cover;
`;

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <HomeContainer>
        <Navbar />
        <CompanyInfoSection>
          <VideoBackground autoPlay muted loop>
            <source src={sampleVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </VideoBackground>
          <CompanyInfoText>Discover RHYNO EV - The Future of Electric Vehicles</CompanyInfoText>
        </CompanyInfoSection>

        <USPSection>
          <USPItem>
            <USPTitle>Unmatched Performance</USPTitle>
            <USPText>Experience the power and efficiency of RHYNO EV.</USPText>
          </USPItem>
          <USPItem>
            <USPTitle>Eco-Friendly</USPTitle>
            <USPText>Reduce your carbon footprint with our electric vehicles.</USPText>
          </USPItem>
        </USPSection>
        
        <ProductsSection>
          <ProductBox>
            <ProductImage src={vehicleImage1} alt="SE03 Lite vehicle" />
            <ProductTitle>SE03 Lite</ProductTitle>
            <ProductDescription>Compact and efficient for city driving.</ProductDescription>
          </ProductBox>
          <ProductBox>
            <ProductImage src={vehicleImage2} alt="SE03 vehicle" />
            <ProductTitle>SE03</ProductTitle>
            <ProductDescription>Powerful performance for all your needs.</ProductDescription>
          </ProductBox>
          <ProductBox>
            <ProductImage src={vehicleImage3} alt="SE03 Max vehicle" />
            <ProductTitle>SE03 Max</ProductTitle>
            <ProductDescription>Maximize your driving experience with advanced features.</ProductDescription>
          </ProductBox>
        </ProductsSection>
        
        <FloatingButton>Contact Us</FloatingButton>
        
        <VideoSection>
          <Video controls muted>
            <source src={sampleVideo2} type="video/mp4" />
            Your browser does not support the video tag.
          </Video>
        </VideoSection>

        <Footer />
      </HomeContainer>
    </ThemeProvider>
  );
};

export default Home;
