import styled from "styled-components";
import { Card } from "../atoms/card/Card"
import { Label } from "../atoms/label/Label";
import { UsernameWithIcon } from "../molecules/UsernameWithIcon";
import { Pagination } from "../atoms/pagination/Pagination";
import { Select } from "../atoms/select/Select";

export const Post = () => {
  return (
    <>
      <SContainer>
        <SHeader>
          <SCardTitle>
            Post
          </SCardTitle>
          <Select />
        </SHeader>
        <Card>
          <SCardHeader>
            <span>Jun 1, 2020</span>
            <Label />
          </SCardHeader>
          <SElemnt href="http://#####">
            Build Your New Idea with Laravel Freamwork.
          </SElemnt>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
          <SCardFooter>
            <a href="http://#####">
              read more
            </a>
            <UsernameWithIcon />
          </SCardFooter>
        </Card>
        <Card>
          <SCardHeader>
            <span>Jun 1, 2020</span>
            <Label />
          </SCardHeader>
          <SElemnt href="http://#####">
            Build Your New Idea with Laravel Freamwork.
          </SElemnt>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
          <SCardFooter>
            <a href="http://#####">
              read more
            </a>
            <UsernameWithIcon />
          </SCardFooter>
        </Card>
        <Card>
          <SCardHeader>
            <span>Jun 1, 2020</span>
            <Label />
          </SCardHeader>
          <SElemnt href="http://#####">
            Build Your New Idea with Laravel Freamwork.
          </SElemnt>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
          <SCardFooter>
            <a href="http://#####">
              read more
            </a>
            <UsernameWithIcon />
          </SCardFooter>
        </Card>
        <Pagination />
      </SContainer>
    </>
  );
};

const SContainer = styled.div`
`;

const SHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SCardTitle = styled.h1`
  color: #374151;
  margin-bottom: 1rem;
  font-size: 1.25rem;
  line-height: 1.75rem;
`;

const SCardHeader = styled.div`
  display: flex;
  margin-top: 1rem;
  justify-content: space-between;
  align-items: center;
`;

const SElemnt = styled.a`
  text-decoration: none;
  color: #1f2937;
  font-size: 24px;
  font-weight: 700;
  padding: 0.25rem 0rem;
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
