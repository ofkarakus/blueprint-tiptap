import styled from 'styled-components';
import { template, toolbar } from 'utils/constants';

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
    width: calc(100vw - ${toolbar.width}px);
    background-color: #f0f0f0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${toolbar.width}px;
    z-index: 0;
`;
