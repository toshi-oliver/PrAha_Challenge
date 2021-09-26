import styled from "styled-components";

export const Header = () => {
  return (
    <SHeader>
      <SContainer>
        <SLogo>
          <SElemnt href="http://#####">Brand</SElemnt>
        </SLogo>
        <SLink>
          <SElemnt href="http://#####">Home</SElemnt>
          <SElemnt href="http://#####">Blog</SElemnt>
          <SElemnt href="http://#####">About us</SElemnt>
        </SLink>
      </SContainer>
    </SHeader>
  );
};

const SHeader = styled.header`
  background-color: #ffff;
  text-align: right;
  padding-top: 1rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-bottom: 1rem;
  height: 48px;
  box-shadow: #ddd 0px 0px 4px 2px;
`;

const SContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const SLogo = styled.div`
  font-weight: 700;
  display: flex;
  font-size: 1.5rem;
`;

const SLink = styled.div`
  display: flex;
  @media screen and (max-width: 480px) {
    display: none
  }
`;

const SElemnt = styled.a`
  margin-left: 1rem;
  margin-right: 1rem;
  text-decoration: none;
  color: #1f2937;
`;
