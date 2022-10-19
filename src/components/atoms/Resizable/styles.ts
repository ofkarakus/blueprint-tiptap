import styled, { css } from "styled-components";
import { Rnd } from "react-rnd";
import handler from "assets/images/handler.png";
import { StyledRndProps } from "./types";

export const StyledRnd = styled(Rnd)<StyledRndProps>`
  ${({ $isFocused }) =>
    $isFocused &&
    css`
      & > div:last-child {
        & > div:nth-child(1),
        & > div:nth-child(2),
        & > div:nth-child(3),
        & > div:nth-child(4),
        & > div:nth-child(5),
        & > div:nth-child(6),
        & > div:nth-child(7),
        & > div:nth-child(8) {
          display: flex;
          align-items: center;
          justify-content: center;
          &::before {
            content: url(${handler});
            height: 17px;
          }
        }
      }
    `};
`;
