import "../../styles.css";
import styled from "styled-components";
import { Header } from "../atoms/layout/Header"
import { Footer } from "../atoms/layout/Footer"
import { Post } from "../organisms/Post";
import { Author } from "../organisms/Author";
import { Categories } from "../organisms/Categories";
import { RecentPost } from "../organisms/RecentPost";

export const Top = () => {
  return (
    <>
      <Header />
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
      <Footer />
    </>
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
`;

const SLeftArea = styled.div`
  padding-top: 40px;
  width: 65%;
  flex-direction: column;
`;

const SRightArea = styled.div`
  padding-top: 40px;
  width: 30%;
`;