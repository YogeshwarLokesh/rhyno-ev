import React from 'react';
import styled from 'styled-components';

const WebsitePolicy = () => {
  return (
    <PageContainer>
      <Title>Website Policy</Title>
      <Content>
        <h2>Introduction</h2>
        <p>This is our website policy. Here we describe the rules and regulations for using our website...</p>
        <h2>Acceptable Use</h2>
        <p>Details about acceptable use of our website...</p>
        <h2>Restrictions</h2>
        <p>Information on what you are restricted from doing on our website...</p>
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

export default WebsitePolicy;
