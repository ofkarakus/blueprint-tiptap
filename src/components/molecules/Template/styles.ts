import styled from 'styled-components';
import { template, toolbar, subtoolbar } from 'utils/constants';
import * as types from './types';

export const Template = styled.div`
    height: ${template.height}px;
    width: ${template.width}px;
    border: 1px solid;
    border-color: lightgray;
    background-color: white;
    position: relative;
`;

export const Background = styled.div<types.BackgroundProps>`
    height: 100vh;
    width: ${({ $isMTbarVisible, $isSTbarVisible }) =>
        $isMTbarVisible
            ? $isSTbarVisible
                ? `calc(100vw - ${toolbar.width + subtoolbar.width}px)`
                : `calc(100vw - ${toolbar.width}px)`
            : '100vw'};
    background-color: #f0f0f0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({ $isMTbarVisible, $isSTbarVisible }) =>
        $isMTbarVisible
            ? $isSTbarVisible
                ? toolbar.width + subtoolbar.width
                : toolbar.width
            : 0}px;
    z-index: 0;
    transition: all 0.75s;
`;
