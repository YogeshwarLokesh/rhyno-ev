import React from 'react';
import styled from 'styled-components';

const PrivacyPolicy = () => {
  return (
    <PageContainer>
      <Title>Privacy Policy</Title>
      <Content>
        <h2>Introduction</h2>
        <p>Information on how we collect, use, and protect your data...</p>
        <h2>Data Collection</h2>
        <p>Details about the data we collect...</p>
        <h2>Data Usage</h2>
        <p>How we use your data...</p>
        <h2>Data Protection</h2>
        <p>How we protect your data...</p>
        {/* Add more sections as needed */}
      </Content>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: auto;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const Content = styled.div`
  line-height: 1.6;
`;

export default PrivacyPolicy;
