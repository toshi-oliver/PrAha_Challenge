import styled from "styled-components";

export const Footer = () => {
  return (
    <SFooter>
      This a Blog Page by khatabwedaa.
        <SElemnt href="http://#####">
          Component details
        </SElemnt>
    </SFooter>
  );
};

const SFooter = styled.footer`
  background-color: #1f2937;
  color: #ffff;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 0.75rem 1rem;
`;

const SElemnt = styled.a`
  text-decoration: none;
  color: #ffff;
`;