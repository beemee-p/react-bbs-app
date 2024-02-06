export enum ISSUE_STATE {
  ALL = "all",
  OPEN = "open",
  CLOSED = "closed",
}

export enum ISSUE_SORT {
  CREATED = "created",
  UPDATED = "updated",
  COMMENTS = "comments",
}

export const issueStateKor = [
  { key: ISSUE_STATE.ALL, label: "전체" },
  { key: ISSUE_STATE.OPEN, label: "open" },
  { key: ISSUE_STATE.CLOSED, label: "closed" },
];

export const issueSortKor = [
  { key: ISSUE_SORT.CREATED, label: "작성일 순" },
  { key: ISSUE_SORT.UPDATED, label: "수정일 순" },
  { key: ISSUE_SORT.COMMENTS, label: "코멘트 순" },
];
