import { ButtonHTMLAttributes, MouseEventHandler, ReactElement } from "react";
import styled from "styled-components";
import { StyleProps } from "type";

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick">,
    StyleProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = (props: ButtonProps): ReactElement => {
  return (
    <ButtonStyle {...props} onClick={props.onClick}>
      {props.children}
    </ButtonStyle>
  );
};

const ButtonStyle = styled.button<StyleProps>`
  border: none;
  cursor: pointer;

  ${({ styles }) => styles && styles}
`;

export default Button;
