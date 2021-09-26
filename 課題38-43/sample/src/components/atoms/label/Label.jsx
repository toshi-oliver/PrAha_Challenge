import styled from "styled-components";

export const Label = () => {
  return <SLabel>Laravel</SLabel>;
};

const SLabel = styled.a`
  padding: 0.25rem 0.5rem;
  font-weight: 700;
  border-radius: 0.25rem;
  background-color: #4B5563;
  color: #F3F4F6;
`;