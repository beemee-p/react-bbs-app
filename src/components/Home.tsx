import { QueryKey } from "@tanstack/react-query";
import { useGetQuery } from "api/useGetQuery";
import { ReactElement, useState } from "react";
import styled, { css } from "styled-components";
import Button from "./common/Button";
import { IoIosArrowDown } from "react-icons/io";
import StateFilterModal from "./filter/StateFilterModal";
import SortFilterModal from "./filter/SortFilterModal";
import { BBSContext } from "./BBSContext";
import {
  ISSUE_SORT,
  ISSUE_STATE,
  issueSortKor,
  issueStateKor,
} from "model/Issue";
import Table from "./common/Table";

enum FILLTER_TYPE {
  SORT = "sort",
  STATE = "stae",
}

const Home = (): ReactElement => {
  const [isFilterModal, setIsFilterModal] = useState<FILLTER_TYPE | null>(null);
  const [stateFilter, setStateFilter] = useState(ISSUE_STATE.OPEN);
  const [sortFilter, setSortFilter] = useState(ISSUE_SORT.CREATED);

  const queries = useQueries({ state: stateFilter, sort: sortFilter });
  const issueList = queries.getIssueList.data as any;
  const columnKeys = [
    { key: "id", label: "번호" },
    { key: "title", label: "제목" },
    { key: "login", label: "작성자" },
    { key: "created_at", label: "작성일" },
    { key: "updated_at", label: "수정일" },
    { key: "comment", label: "코멘트 수" },
  ];

  return (
    <BBSContext.Provider
      value={{ stateFilter, setStateFilter, sortFilter, setSortFilter }}
    >
      <MainHome>
        <p className="applicant">박유나</p>
        <h1>이슈 정리</h1>

        <SectionFilter>
          <Button
            styles={StateButtonStyle}
            onClick={() => setIsFilterModal(FILLTER_TYPE.STATE)}
          >
            {issueStateKor?.find((state) => state.key === stateFilter)?.label}
            <IoIosArrowDown size={"18px"} color={"#14171a"} />
          </Button>

          <Button
            styles={SortButtonStyle}
            onClick={() => setIsFilterModal(FILLTER_TYPE.SORT)}
          >
            {issueSortKor?.find((sort) => sort.key === sortFilter)?.label}
            <IoIosArrowDown size={"18px"} color={"#14171a"} />
          </Button>
        </SectionFilter>

        <Table list={issueList} columns={columnKeys} />

        {isFilterModal === FILLTER_TYPE.STATE && (
          <StateFilterModal
            open={isFilterModal === FILLTER_TYPE.STATE}
            close={() => setIsFilterModal(null)}
          />
        )}

        {isFilterModal === FILLTER_TYPE.SORT && (
          <SortFilterModal
            open={isFilterModal === FILLTER_TYPE.SORT}
            close={() => setIsFilterModal(null)}
          />
        )}
      </MainHome>
    </BBSContext.Provider>
  );
};

interface UseQueriesProps {
  state: ISSUE_STATE;
  sort: ISSUE_SORT;
}

const useQueries = (props: UseQueriesProps) => {
  const getIssueList = useGetQuery({
    key: "getRepo" as unknown as QueryKey,
    url: "https://api.github.com/repos/facebook/react/issues",
    params: { sort: props.sort, state: props.state },
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
