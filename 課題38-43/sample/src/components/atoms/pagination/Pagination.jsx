import styled from "styled-components";

export const Pagination = () => {
  return (
    <>
      <SContainer>
        <SPaginate>
          <SElemnt href="http://#####">previous</SElemnt>
          <SElemnt href="http://#####">1</SElemnt>
          <SElemnt href="http://#####">2</SElemnt>
          <SElemnt href="http://#####">3</SElemnt>
          <SElemnt href="http://#####">Next</SElemnt>
        </SPaginate>
      </SContainer>
    </>
      );
};

const SContainer = styled.div`
  margin-top: 2rem;
`;

const SPaginate = styled.div`
  display: flex;
`;

const SElemnt = styled.a`
  text-decoration: none;
  background-color: #FFFFF;
  color: #374151;
  box-shadow: #e5e7eb 0px 0px 4px 2px;
  border-radius: 0.375rem;
  font-size: 16px;
  font-weight: 500;
  padding: 0.5rem 0.75rem;
  margin: 0 0.25rem;
`;