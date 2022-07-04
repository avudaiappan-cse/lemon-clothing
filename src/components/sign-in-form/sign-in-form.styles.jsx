import styled from "styled-components";

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 23.75rem;
`;

export const SignInTitle = styled.h2`
  margin: 10px 0;
`;

export const ErrorMessage = styled.span`
  color: white;
  font-style: italic;
  padding: 0.5rem;
  background-color: #ff4646;
  margin-top: 0.5rem;
  border-radius: 2px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
