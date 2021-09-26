import styled from "styled-components";

export const Categories = () => {
  return (
    <>
      <SContainer>
        <SCardTitle>
          Categories
        </SCardTitle>
        <SCard>
          <SUl>
            <SLi>
              <SElemnt href="http://#####">- AWS</SElemnt>
            </SLi>
            <SLi>
              <SElemnt href="http://#####">- Laravel</SElemnt>
            </SLi>
            <SLi>
              <SElemnt href="http://#####">- Vue</SElemnt>
            </SLi>
            <SLi>
              <SElemnt href="http://#####">- Design</SElemnt>
            </SLi>
            <SLi>
              <SElemnt href="http://#####">- Django</SElemnt>
            </SLi>
            <SLi>
              <SElemnt href="http://#####">- PHP</SElemnt>
            </SLi>
          </SUl>
        </SCard>
      </SContainer>
    </>
  );
};

const SContainer = styled.div`
`;

const SCardTitle = styled.h1`
  display: flex;
  justify-content: space-between;
  color: #374151;
  margin-bottom: 1rem;
  font-size: 1.25rem;
  line-height: 1.75rem;
`;

const SCard = styled.div`
  background-color: #fff;
  box-shadow: #ddd 0px 0px 4px 2px;
  border-radius: 4px;
  padding: 1.5rem 1rem;
`;

const SUl = styled.ul`
  list-style: none;
  align-items: center;
`
const SLi = styled.li`
  display: flex;
  margin-top: 1.5rem;
`

const SElemnt = styled.a`
  text-decoration: none;
  color: #374151;
  font-size: 16px;
  font-weight: 700;
  margin: 0 0,25rem;
`;