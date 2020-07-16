import {Props} from "./props";
import styled from "@emotion/styled";

export const MockBackground = styled.div<Props>`
  padding: 20px;
  border-radius: 10px;
  background-color: ${ ({ background }: Props) => background };
`;

MockBackground.defaultProps = {
  background: "#060815"
};