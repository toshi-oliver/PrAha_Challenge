import styled from "styled-components";
import { Card } from "../atoms/card/Card"
import { Label } from "../atoms/label/Label";
import { UsernameWithIcon } from "../molecules/UsernameWithIcon";

export const RecentPost = () => {
  return (
    <>
      <SContainer>
        <SCardTitle>
          Recent Post
        </SCardTitle>
        <Card>
          <SCardHeader>
            <Label />
          </SCardHeader>
          <SElemnt href="http://#####">
            Build Your New Idea with Laravel Freamwork.
          </SElemnt>
          <SCardFooter>
            <UsernameWithIcon />
            <span>Jun 1, 2020</span>
          </SCardFooter>
        </Card>
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

const SCardHeader = styled.div`
  display: flex;
  margin: 1rem 0;
  justify-content: center;
  align-items: center;
`;

const SElemnt = styled.a`
  text-decoration: none;
  color: #374151;
  font-size: 1.125rem;
  line-height: 1.75rem;
  margin-top: 1rem;
`;

const SCardFooter = styled.div`
  display: flex;
  margin-top: 1rem;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration: none;
    color: #3B82F6;
  }
`;
