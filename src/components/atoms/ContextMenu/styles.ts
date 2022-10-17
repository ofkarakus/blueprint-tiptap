import styled, { css } from "styled-components";
import { ContextMenuProps } from "./types";

export const Wrapper = styled.div<ContextMenuProps>`
  border-radius: 4px;
  box-sizing: border-box;
  position: absolute;
  width: 200px;
  background-color: blueviolet;
  box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.1);
  ${({ top, left }) => css`
    top: ${top}px;
    left: ${left}px;
  `}
  ul {
    list-style-type: none;
    box-sizing: border-box;
    margin: 0;
    padding: 10px;
  }
  ul li {
    padding: 18px 12px;
    border-radius: 4px;
  }
  ul li:hover {
    cursor: pointer;
    background-color: #4b4b4b;
  }
`;
