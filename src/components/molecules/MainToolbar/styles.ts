import styled from 'styled-components';
import { toolbar } from 'utils/constants';

export const Wrapper = styled.div<{ $isVisible: boolean }>`
    height: 100vh;
    width: ${toolbar.width}px;
    min-width: ${toolbar.width}px;
    display: flex;
    flex-flow: row wrap;
    align-content: flex-start;
    background: #fefefe;
    position: fixed;
    top: 0;
    left: ${({ $isVisible }) => ($isVisible ? 0 : -toolbar.width)}px;
    z-index: 1001;
    transition: left 0.75s;
`;
