import React from 'react';
import styled from 'styled-components';

const RefundPolicy = () => {
  return (
    <PageContainer>
      <Title>Refund Policy</Title>
      <Content>
        <h2>Introduction</h2>
        <p>Our refund policy details...</p>
        <h2>Eligibility</h2>
        <p>Conditions under which refunds are provided...</p>
        <h2>Procedure</h2>
        <p>How to request a refund...</p>
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

export default RefundPolicy;
