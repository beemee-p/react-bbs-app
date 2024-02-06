import { QueryKey } from "@tanstack/react-query";
import { useGetQuery } from "api/useGetQuery";
import { ReactElement } from "react";
import styled, { css } from "styled-components";
import Button, { ButtonPrimaryStyle } from "./common/Button";
import { IoIosArrowDown } from "react-icons/io";

const Home = (): ReactElement => {
  const queries = useQueries();
  const issueList = queries.getIssueList.data;
  const columnKeys = [
    { id: "번호" },
    { title: "제목" },
    { login: "작성자" },
    { created_at: "작성일" },
    { updated_at: "수정일" },
    { comment: "코멘트 수" },
  ];

  return (
    <MainHome>
      <p className="applicant">박유나</p>
      <h1>이슈 정리</h1>

      <SectionFilter>
        <Button styles={StateButtonStyle}>
          이슈 상태
          <IoIosArrowDown className="icon" size={"18px"} color={"#14171a"} />
        </Button>

        <Button styles={SortButtonStyle}>
          작성일 순
          <IoIosArrowDown className="icon" size={"18px"} color={"#14171a"} />
        </Button>
      </SectionFilter>
    </MainHome>
  );
};

const useQueries = () => {
  const getIssueList = useGetQuery({
    key: "getRepo" as unknown as QueryKey,
    url: "https://api.github.com/repos/facebook/react/issues",
    params: { sort: "create", state: "open" },
  });

  return { getIssueList };
};

const MainHome = styled.main`
  padding: 72px 80px 0;

  .applicant {
    padding: 0 0 12px;
    border-bottom: 1px solid #dfe5eb;
    color: #7b848c;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
  }

  > h1 {
    color: #14171a;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    margin-top: 32px;
  }
`;

const SectionFilter = styled.section`
  display: flex;
  justify-content: space-between;
`;

export const StateButtonStyle = css`
  display: flex;
  align-items: center;
  padding: 10px 14px;
  border-radius: 32px;
  border: 1px solid #dfe5eb;
  background: #ffffff;

  > svg {
    margin-left: 4px;
  }

  &:hover {
    opacity: 0.7;
  }
`;

export const SortButtonStyle = css`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  background: #ffffff;

  > svg {
    margin-left: 4px;
  }

  &:hover {
    opacity: 0.7;
  }
`;

export default Home;
