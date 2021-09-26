import styled from "styled-components";

export const UsernameWithIcon = () => {
  return (
    <SContainer>
      <Simg height={45} width={45} src="https://source.unsplash.com/c_GmwfHBDzk" alt="name" />
      <SName>toshi oliver</SName>
    </SContainer>
  );
};

const SContainer = styled.div`
`;

const Simg = styled.img`
  border-radius: 50%;
  float: left;
  margin: 0 1rem;
`;
const SName = styled.h1`
  font-size: 16px;
  color: #40514e;
  float: left;
`;