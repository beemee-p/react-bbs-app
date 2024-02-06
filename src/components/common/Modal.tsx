import { HTMLAttributes, ReactElement, useRef } from "react";
import styled from "styled-components";
import { StyleProps } from "type";

export interface ModalProps extends HTMLAttributes<HTMLDivElement>, StyleProps {
  open: boolean;
  close: () => void;
}

const Modal = (props: ModalProps): ReactElement => {
  const clickedRef = useRef<EventTarget>();

  function handleClose(e: React.MouseEvent<HTMLElement>) {
    if (clickedRef.current) {
      clickedRef.current = undefined;
      return;
    }

    e.stopPropagation();
    props.close();
  }

  return (
    <DivModalOuter className="modal-outer" onMouseUp={handleClose} {...props}>
      <div
        className="modal-inner"
        onMouseDown={(e) => {
          clickedRef.current = e.target;
        }}
        onMouseUp={(e) => {
          clickedRef.current = e.target;
        }}
      >
        {props.children}
      </div>
    </DivModalOuter>
  );
};

const DivModalOuter = styled.div<StyleProps>`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  overflow: auto;

  .modal-inner {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 90%;
    width: 100%;
    background: #ffffff;
    border-radius: 8px;
    z-index: 200;
  }

  ${({ styles }) => styles && styles}
`;

export default Modal;
