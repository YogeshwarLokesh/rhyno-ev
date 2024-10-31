import React, { useState } from 'react';
import styled from 'styled-components';

// Import product images
import greyImage from 'C:/Users/yoges/rhyno-ev/src/assets/images/grey.jpg'; // Update with correct paths
import redImage from 'C:/Users/yoges/rhyno-ev/src/assets/images/red.jpg';
import OrangeImage from 'C:/Users/yoges/rhyno-ev/src/assets/images/vehical1.jpeg';
import yellowImage from 'C:/Users/yoges/rhyno-ev/src/assets/images/yellow.jpg';

const Product2 = () => {
  const [selectedColor, setSelectedColor] = useState(redImage); // Default color

  const handleColorChange = (image) => {
    setSelectedColor(image);
  };

  return (
    <ProductContainer>
      <ProductImageWrapper>
        <ProductImage src={selectedColor} alt="SE03 Lite" />
        <ColorOptions>
          <ColorButton color="#FF0000" onClick={() => handleColorChange(redImage)}></ColorButton>
          <ColorButton color="#ff5c00" onClick={() => handleColorChange(OrangeImage)}></ColorButton>
          <ColorButton color="#ffed29" onClick={() => handleColorChange(yellowImage)}></ColorButton>
          <ColorButton color="#808080" onClick={() => handleColorChange(greyImage)}></ColorButton>
        </ColorOptions>
        <BuyNowButton>Buy Now</BuyNowButton>
      </ProductImageWrapper>
      <DescriptionWrapper>
        <ProductDescription>
          Rhyno SE03 Lite is the perfect blend of convenience and style for urban riders. This lightweight yet powerful electric scooter is designed for easy commuting with a top speed of 45 km/h and a range of up to 80 km on a single charge. Whether you're navigating through busy city streets or cruising along the coast, the SE03 Lite ensures a smooth and efficient ride.
        </ProductDescription>
        <Specifications>
          <SpecItem><strong>Battery:</strong> 2.0Kwh LFP with 1200 cycles</SpecItem>
          <SpecItem><strong>Charging Time:</strong> 3 hours (10A)</SpecItem>
          <SpecItem><strong>Max Speed:</strong> 45 km/h</SpecItem>
          <SpecItem><strong>Max Range:</strong> 80 km (@30km/h), 60 km (@full speed)</SpecItem>
          <SpecItem><strong>Other Key Benefits:</strong> Compact design, Quick acceleration, Energy-efficient, Smooth handling</SpecItem>
        </Specifications>
      </DescriptionWrapper>
    </ProductContainer>
  );
};

export default Product2;

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
