import React from 'react';
import styled from 'styled-components';

const PreBook = () => {
  return (
    <PreBookContainer>
      <Form>
        <FormGroup>
          <Label>Full Name</Label>
          <Input type="text" placeholder="Enter your full name" required />
        </FormGroup>
        <FormGroup>
          <Label>Email Address</Label>
          <Input type="email" placeholder="Enter your email address" required />
        </FormGroup>
        <FormGroup>
          <Label>Phone Number</Label>
          <Input type="tel" placeholder="Enter your phone number" required />
        </FormGroup>
        <SubmitButton>Pre-book Now</SubmitButton>
      </Form>
    </PreBookContainer>
  );
};

export default PreBook;

const PreBookContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Form = styled.form`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.darkGrey};
  border-radius: 4px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.yellow};
  border: none;
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkGrey};
  }
`;
