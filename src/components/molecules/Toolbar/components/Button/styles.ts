import styled from 'styled-components';
import { WrapperProps } from './types';

export const Wrapper = styled.div<WrapperProps>`
    width: 65px;
    height: 65px;
    border-bottom: 1px solid #e3e3e3;
    display: flex;
    align-items: center;
    justify-content: center;
    &:nth-of-type(odd) {
        border-right: 1px solid #e3e3e3;
    }
    cursor: pointer;
    position: relative;

    &::after {
        content: attr(name);
        pointer-events: none;
        position: absolute;
        background-color: white;
        border: 1px solid rgba(0, 0, 0, 0.1);
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
        top: 0;
        bottom: 0;
        left: ${({ $isTooltipVisible }) => ($isTooltipVisible ? '62px' : '135px')};
        margin: auto;
        padding: 0 20px;
        white-space: nowrap;
        height: 40px;
        line-height: 40px;
        z-index: 1001;
        color: black;
        visibility: ${({ $isTooltipVisible }) => ($isTooltipVisible ? 'visible' : 'hidden')};
        transition: all 0.25s;
        opacity: ${({ $isTooltipVisible }) => ($isTooltipVisible ? '1' : '0')};
        font-size: small;
        border-radius: 0 3px 3px 0;
    }
    &::before {
        pointer-events: none;
        content: '';
        background-color: #dfdfdf;
        position: absolute;
        transform: rotate(45deg);
        left: ${({ $isTooltipVisible }) => ($isTooltipVisible ? '60px' : '133px')};
        height: 25px;
        width: 25px;
        transition: all 0.25s;
        margin: auto;
        opacity: ${({ $isTooltipVisible }) => ($isTooltipVisible ? '1' : '0')};
        top: 0;
        bottom: 0;
        visibility: ${({ $isTooltipVisible }) => ($isTooltipVisible ? 'visible' : 'hidden')};
        z-index: 1000;
    }
`;
