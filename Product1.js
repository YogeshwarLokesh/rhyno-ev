import React from 'react';
import styled from 'styled-components';

// Import the product image
import productImage from 'C:/Users/yoges/rhyno-ev/src/assets/images/third.jpeg'; // Update with the correct path

const Product1 = () => {
  return (
    <>
      <ProductContainer>
        <ContentWrapper>
          <ProductImageWrapper>
            <ProductImage src={productImage} alt="SE03 Lite" />
            <BuyNowButton>Buy Now</BuyNowButton>
          </ProductImageWrapper>
          <DescriptionWrapper>
            <ProductTitle>SE03 Lite</ProductTitle>
            <ProductDescription>
              The Rhyno SE03 Lite combines performance, style, and efficiency, embodying the latest advancements in electric scooter technology.
            </ProductDescription>
            <Specifications>
              <SpecItem><strong>Battery:</strong> 2.0Kwh LFP with 1200 cycles</SpecItem>
              <SpecItem><strong>Charging Time:</strong> 3 hours (10A)</SpecItem>
              <SpecItem><strong>Max Speed:</strong> 45 km/h</SpecItem>
              <SpecItem><strong>Max Range:</strong> 80 km (@30km/h), 60 km (@full speed)</SpecItem>
              <SpecItem><strong>Other Key Benefits:</strong> Compact design, Quick acceleration, Energy-efficient, Smooth handling</SpecItem>
            </Specifications>
          </DescriptionWrapper>
        </ContentWrapper>
      </ProductContainer>
     
    </>
  );
};

export default Product1;

// Styled Components
const ProductContainer = styled.div`
  display: flex;
  flex-direction: row; /* Align image and description side by side */
  padding: 150px;
  justify-content: center;
  align-items: flex-start;
  gap: 40px; /* Space between image and description */
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row; /* Display in a row */
  align-items: flex-start;
  max-width: 1200px; /* Adjust as needed */
  gap: 40px; /* Space between image and description */
`;

const ProductImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px; /* Set the width of the image container */
`;

const ProductImage = styled.img`
  width: 100%; /* Full width */
  height: auto;
  margin-bottom: 10px; /* Space between image and button */
`;

const BuyNowButton = styled.button`
  padding: 15px 30px;
  background-color: ${({ theme }) => theme.colors?.yellow || '#FFD700'};
  border: none;
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts?.primary || 'Arial, sans-serif'};
  font-weight: bold;
  color: ${({ theme }) => theme.colors?.black || '#000'};
  transition: background-color 0.3s ease;
  margin-top: 10px;

  &:hover {
    background-color: ${({ theme }) => theme.colors?.darkGrey || '#333'};
  }
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 700px; /* Adjust width as needed */
`;

const ProductTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts?.primary || 'Arial, sans-serif'};
  font-size: 28px;
  color: ${({ theme }) => theme.colors?.black || '#000'};
  margin-bottom: 20px;
`;

const ProductDescription = styled.p`
  font-family: ${({ theme }) => theme.fonts?.body || 'Arial, sans-serif'};
  font-size: 16px;
  color: ${({ theme }) => theme.colors?.text || '#333'};
  text-align: left;
  margin-bottom: 15px;
`;

const Specifications = styled.div`
  display: flex;
  flex-direction: column;
`;

const SpecItem = styled.p`
  font-family: ${({ theme }) => theme.fonts?.body || 'Arial, sans-serif'};
  font-size: 16px;
  color: ${({ theme }) => theme.colors?.text || '#333'};
  margin-bottom: 10px;
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors?.darkGrey || '#333'};
  color: ${({ theme }) => theme.colors?.white || '#fff'};
  text-align: center;
  padding: 10px;
  font-family: ${({ theme }) => theme.fonts?.body || 'Arial, sans-serif'};
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
