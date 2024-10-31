import React from 'react';
import styled from 'styled-components';

const CompareAll = () => {
  return (
    <CompareContainer>
      <Heading>Compare Models</Heading>
      <CompareTable>
        <thead>
          <tr>
            <th>Feature</th>
            <th>SE03 Lite</th>
            <th>SE03</th>
            <th>SE03 Max</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Battery</td>
            <td>1.8 Kwh</td>
            <td>2.7 Kwh</td>
            <td>2.7 Kwh</td>
          </tr>
          <tr>
            <td>Range</td>
            <td>50 km</td>
            <td>70 km</td>
            <td>90 km</td>
          </tr>
          <tr>
            <td>Top Speed</td>
            <td>45 km/h</td>
            <td>50 km/h</td>
            <td>60 km/h</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </CompareTable>
      <BuyNowButton>Buy Now</BuyNowButton>
    </CompareContainer>
  );
};

export default CompareAll;

const CompareContainer = styled.div`
  padding: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors?.background || '#f4f4f4'};
`;

const Heading = styled.h1`
  font-family: ${({ theme }) => theme.fonts?.primary || 'Arial, sans-serif'};
  font-size: 28px;
  color: ${({ theme }) => theme.colors?.primary || '#007bff'};
  margin-bottom: 20px;
`;

const CompareTable = styled.table`
  width: 100%;
  max-width: 900px;
  border-collapse: collapse;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  th, td {
    padding: 15px;
    text-align: left;
    border-bottom: 1px solid ${({ theme }) => theme.colors?.border || '#ccc'};
  }

  th {
    background-color: ${({ theme }) => theme.colors?.darkGrey || '#333'};
    color: ${({ theme }) => theme.colors?.white || '#fff'};
    font-weight: bold;
  }

  td {
    background-color: ${({ theme }) => theme.colors?.white || '#fff'};
    color: ${({ theme }) => theme.colors?.text || '#333'};
  }

  tr:nth-child(even) td {
    background-color: ${({ theme }) => theme.colors?.lightGrey || '#f9f9f9'};
  }

  tr:hover {
    background-color: ${({ theme }) => theme.colors?.hover || '#f0f0f0'};
  }
`;

const BuyNowButton = styled.button`
  padding: 15px 30px;
  background-color: ${({ theme }) => theme.colors?.yellow || '#f7c600'};
  border: none;
  border-radius: 4px;
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts?.primary || 'Arial, sans-serif'};
  font-weight: bold;
  color: ${({ theme }) => theme.colors?.black || '#000'};
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin-top: 20px;

  &:hover {
    background-color: ${({ theme }) => theme.colors?.darkYellow || '#e0a800'};
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;
