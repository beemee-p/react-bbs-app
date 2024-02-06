import Button from "components/common/Button";
import Modal, { ModalProps } from "components/common/Modal";
import { ISSUE_SORT, issueSortKor } from "model/Issue";
import { ReactElement, useState } from "react";
import { css } from "styled-components";
import { FaCheck } from "react-icons/fa6";
import { useBBSContext } from "components/BBSContext";

interface SortFilterModalProps extends ModalProps {}

const SortFilterModal = (props: SortFilterModalProps): ReactElement => {
  const bbsContext = useBBSContext();

  function handleFilter(key: ISSUE_SORT) {
    bbsContext.setSortFilter(key);
    props.close();
  }

  return (
    <>
      <Modal {...props} styles={SortFilterModalStyle}>
        <h1 className="modal-title">정렬</h1>

        <section className="modal-btn-wrap">
          {issueSortKor.map((issue) => (
            <Button
              className={bbsContext.sortFilter === issue.key ? "active" : ""}
              styles={StateFillterButtonStyle}
              onClick={() => handleFilter(issue.key)}
            >
              <span>{issue.label}</span>
              {bbsContext.sortFilter === issue.key && (
                <FaCheck size={"18px"} color={"#1A8CFF"} />
              )}
            </Button>
          ))}
        </section>
      </Modal>
    </>
  );
};

const SortFilterModalStyle = css`
  .modal-inner {
    padding: 20px 24px;
    max-width: 400px;
    width: 100%;

    .modal-title {
      font-size: 18px;
      font-weight: 700;
      line-height: 26px;
    }

    .modal-btn-wrap {
      margin-bottom: 32px;
    }
  }
`;

const StateFillterButtonStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  background: #ffffff;
  padding: 15px 0;
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;

  &:hover {
    opacity: 0.8;
  }
`;

const StateApplyButtonStyle = css`
  padding: 12px 36px;
  width: 100%;
  background: #1a8cff;
  border-radius: 8px;
  color: #ffffff;

  &:hover {
    opacity: 0.8;
  }
`;

export default SortFilterModal;
