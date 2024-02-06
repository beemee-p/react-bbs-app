import { useBBSContext } from "components/BBSContext";
import Button from "components/common/Button";
import Modal, { ModalProps } from "components/common/Modal";
import { ISSUE_STATE, issueStateKor } from "model/Issue";
import { ReactElement, useState } from "react";
import { css } from "styled-components";

interface StateFilterModalProps extends ModalProps {}

const StateFilterModal = (props: StateFilterModalProps): ReactElement => {
  const bbsContext = useBBSContext();
  const [stateFilter, setStateFilter] = useState<ISSUE_STATE>(ISSUE_STATE.OPEN);

  function handleFilter() {
    bbsContext.setStateFilter(stateFilter);
    props.close();
  }

  return (
    <>
      <Modal {...props} styles={StateFilterModalStyle}>
        <h1 className="modal-title">이슈 상태</h1>

        <section className="modal-btn-wrap">
          {issueStateKor.map((issue) => (
            <Button
              className={stateFilter === issue.key ? "active" : ""}
              styles={StateFillterButtonStyle}
              onClick={() => setStateFilter(issue.key)}
            >
              {issue.label}
            </Button>
          ))}
        </section>

        <Button styles={StateApplyButtonStyle} onClick={handleFilter}>
          적용
        </Button>
      </Modal>
    </>
  );
};

const StateFilterModalStyle = css`
  .modal-inner {
    padding: 20px 24px;
    max-width: 400px;

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
  padding: 10px 14px;
  border-radius: 32px;
  border: 1px solid #dfe5eb;
  background: #ffffff;
  margin-right: 4px;

  &.active {
    background: #1a8cff;
    color: #ffffff;
  }

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

export default StateFilterModal;
