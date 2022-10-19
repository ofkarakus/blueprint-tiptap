import styled, { css } from 'styled-components';
import { ContextMenuProps } from './types';

export const Wrapper = styled.div<ContextMenuProps>`
    box-sizing: border-box;
    position: absolute;
    width: 150px;
    background-color: white;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
    ${({ top, left }) => css`
        top: ${top}px;
        left: ${left}px;
    `}
    ul {
        list-style-type: none;
        box-sizing: border-box;
        margin: 0;
        padding: 0px;
    }
    ul li {
        padding: 5px 5px 5px 8px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        font-size: 13px;
    }
    ul li:last-of-type {
        border-bottom: 0px;
    }
    ul li:hover {
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.05);
    }
`;
