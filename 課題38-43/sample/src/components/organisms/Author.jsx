import styled from "styled-components";
import { UsernameWithIcon } from "../molecules/UsernameWithIcon";

export const Author = () => {
  return (
    <>
      <SContainer>
        <SCardTitle>
          Author
        </SCardTitle>
        <SCard>
          <SUl>
            <SLi>
              <UsernameWithIcon />
              <p>Created 23 Posts</p>
            </SLi>
            <SLi>
              <UsernameWithIcon />
              <p>Created 23 Posts</p>
            </SLi>
            <SLi>
              <UsernameWithIcon />
              <p>Created 23 Posts</p>
            </SLi>
            <SLi>
              <UsernameWithIcon />
              <p>Created 23 Posts</p>
            </SLi>
            <SLi>
              <UsernameWithIcon />
              <p>Created 23 Posts</p>
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
  padding: 1rem 0;
  margin-top: 1.5rem;
`;

const SUl = styled.ul`
  list-style: none;
  align-items: center;
`
const SLi = styled.li`
  display: flex;
  margin-top: 1.5rem;
`