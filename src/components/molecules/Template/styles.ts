import styled from "styled-components";
import { template } from "../../../utils/constants";

export const Template = styled.div`
  height: ${template.height}px;
  width: ${template.width}px;
  border: 1px solid;
  border-color: lightgray;
  background-color: white;
  position: relative;
`;

export const Background = styled.div`
  height: 100vh;
  width: calc(100vw - 130px);
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
