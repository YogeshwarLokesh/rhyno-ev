import React from 'react';
import styled from 'styled-components';

const Careers = () => {
  return (
    <PageContainer>
      <Title>Careers</Title>
      <Content>
        <h2>Join Our Team</h2>
        <p>We are looking for talented individuals to join our team. Here are the current openings:</p>
        <h3>Job Title 1</h3>
        <p>Job description and requirements...</p>
        <h3>Job Title 2</h3>
        <p>Job description and requirements...</p>
        {/* Add more job listings as needed */}
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

export default Careers;
