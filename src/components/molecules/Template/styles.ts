import styled from "styled-components";
import { template } from "../../../utils/constants";

export const Svg = styled.svg`
  height: ${template.height}px;
  width: ${template.width}px;
  border: 1px solid;
  border-color: lightgray;
  background-color: white;
`;

export const G = styled.g`
  transform: translate(${template.width / 2}px, ${template.height / 2}px);
`;
