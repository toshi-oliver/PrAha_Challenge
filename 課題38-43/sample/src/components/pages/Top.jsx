import "../../styles.css";
import styled from "styled-components";
import { Post } from "../organisms/Post";
import { Author } from "../organisms/Author";
import { Categories } from "../organisms/Categories";
import { RecentPost } from "../organisms/RecentPost";

export const Top = () => {
  return (
    <SWrapper>
      <SContainer>
        <SLeftArea>
          <Post />
        </SLeftArea>
        <SRightArea>
          <Author />
          <Categories />
          <RecentPost />
        </SRightArea>
      </SContainer>
    </SWrapper>
  );
};

const SWrapper = styled.div`
  padding: 2rem 1.5rem 4rem 1.5rem;
`;

const SContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1280px;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

const SLeftArea = styled.div`
  padding-top: 40px;
  width: 65%;
  flex-direction: column;
  @media screen and (max-width: 480px) {
    width: 375px;
  }
`;

const SRightArea = styled.div`
  padding-top: 40px;
  width: 30%;
  @media screen and (max-width: 480px) {
    display: none
  }
`;