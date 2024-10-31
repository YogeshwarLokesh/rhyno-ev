// src/pages/Product3.js
import React, { useState } from 'react';
import styled from 'styled-components';

// Import product images
import secondImage from '../assets/images/second.jpeg';
import maxYellowImage from '../assets/images/maxyellow.jpg';
import maxRedImage from '../assets/images/maxredjpg.jpg';

const Product3 = () => {
  const [currentImage, setCurrentImage] = useState(maxRedImage); // Default color

  const handleColorChange = (image) => {
    setCurrentImage(image);
  };

  return (
    <ProductContainer>
      <ProductImageWrapper>
        <ProductImage src={currentImage} alt="SE03 Max" />
        <ColorOptions>
          <ColorButton color="#FF0000" onClick={() => handleColorChange(maxYellowImage)}></ColorButton>
          <ColorButton color="#ffed29" onClick={() => handleColorChange(maxRedImage)}></ColorButton>
          <ColorButton color="#ff5c00" onClick={() => handleColorChange(secondImage)}></ColorButton>
        </ColorOptions>
        <BuyNowButton>Buy Now</BuyNowButton>
      </ProductImageWrapper>
      <DescriptionWrapper>
        <ProductDescription>
          The Rhyno SE03 Max is the ultimate electric scooter for those who demand both performance and style. Equipped with a powerful 2000W motor and a robust battery, the SE03 Max offers an exceptional riding experience with a top speed of 65 km/h and a range of up to 120 km.
        </ProductDescription>
        <Specifications>
          <SpecItem><strong>Battery:</strong> 2.7Kwh LFP with 1500 cycles</SpecItem>
          <SpecItem><strong>Charging Time:</strong> 4 hours (12A)</SpecItem>
          <SpecItem><strong>Max Speed:</strong> 65 km/h</SpecItem>
          <SpecItem><strong>Max Range:</strong> 120 km (@30km/h), 100 km (@45km/h), 80 km (@full speed)</SpecItem>
          <SpecItem><strong>Other Key Benefits:</strong> Fire-safe battery, Range prediction, Comfortable ride, Stable and safe</SpecItem>
        </Specifications>
      </DescriptionWrapper>
    </ProductContainer>
  );
};

export default Product3;

// Styled Components
const ProductContainer = styled.div`
  display: flex;
  flex-direction: row; /* Align image and description side by side */
  padding: 150px;
  justify-content: center;
  align-items: flex-start;
  gap: 40px; /* Space between image and description */
`;

const ProductImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px; /* Adjust the width of the image container */
`;

const ProductImage = styled.img`
  width: 100%; /* Full width */
  height: auto;
  margin-bottom: 10px; /* Space between image and color options */
`;

const ColorOptions = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const ColorButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: ${({ color }) => color};
  border: 2px solid ${({ theme }) => theme.colors?.darkGrey || '#333'};
  border-radius: 50%;
  cursor: pointer;

  &:focus {
    outline: none;
  }
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
  max-width: 600px; /* Adjust the width as needed */
`;

const ProductDescription = styled.p`
  font-family: ${({ theme }) => theme.fonts?.body || 'Arial, sans-serif'};
  font-size: 16px;
  color: ${({ theme }) => theme.colors?.text || '#333'};
  text-align: left;
  margin-bottom: 20px;
`;

const Specifications = styled.div`
  text-align: left;
  margin-bottom: 20px;
`;

const SpecItem = styled.p`
  font-family: ${({ theme }) => theme.fonts?.body || 'Arial, sans-serif'};
  font-size: 16px;
  color: ${({ theme }) => theme.colors?.text || '#333'};
  margin-bottom: 10px;
`;
