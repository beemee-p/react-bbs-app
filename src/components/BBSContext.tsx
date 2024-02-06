import { ISSUE_SORT, ISSUE_STATE } from "model/Issue";
import { Dispatch, SetStateAction, createContext, useContext } from "react";

export interface BBSContextType {
  stateFilter: ISSUE_STATE;
  setStateFilter: Dispatch<SetStateAction<ISSUE_STATE>>;
  sortFilter: ISSUE_SORT;
  setSortFilter: Dispatch<SetStateAction<ISSUE_SORT>>;
}

export const BBSContext = createContext<BBSContextType>({
  stateFilter: ISSUE_STATE.OPEN,
  setStateFilter: () => {},
  sortFilter: ISSUE_SORT.CREATED,
  setSortFilter: () => {},
});

export const useBBSContext = () => useContext(BBSContext);
