import styled from 'styled-components';
import { toolbar } from 'utils/constants';

export const Wrapper = styled.div<{ $isMTbarVisible: boolean }>`
    height: 100vh;
    width: ${toolbar.width}px;
    min-width: ${toolbar.width}px;
    display: flex;
    flex-flow: row wrap;
    align-content: flex-start;
    background: #fefefe;
    position: fixed;
    top: 0;
    left: ${({ $isMTbarVisible }) => ($isMTbarVisible ? 0 : -toolbar.width)}px;
    z-index: 1001;
    box-shadow: ${({ $isMTbarVisible }) =>
        $isMTbarVisible ? '0 0 10px rgba(0, 0, 0, 0.1)' : 'none'};
    transition: all 0.5s;
`;

export const ListBoundaryText = styled.span`
    color: #9f9f9f;
    font-size: 10px;
    &:before {
        content: 'LIST BOUNDARY';
    }
`;
