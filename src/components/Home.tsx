import { QueryKey } from "@tanstack/react-query";
import { useGetQuery } from "api/useGetQuery";
import { ReactElement } from "react";
import styled from "styled-components";

const Home = (): ReactElement => {
  const queries = useQueries();

  return (
    <MainHome>
      <p className="applicant">박유나</p>
      <h1>이슈 정리</h1>
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
    letter-spacing: 0em;
  }

  > h1 {
    color: #14171a;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: 0em;
    margin-top: 32px;
  }
`;

export default Home;
