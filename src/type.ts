import { CSSProp } from "styled-components";

export interface StyleProps {
  styles?: CSSProp;
}

export interface keyLabelMapType<K = string, L = string> {
  key: K;
  label: L;
}
