import styled from 'styled-components';
import { toolbar } from 'utils/constants';

export const Wrapper = styled.div`
    height: 100vh;
    width: ${toolbar.width}px;
    min-width: ${toolbar.width}px;
    display: flex;
    flex-flow: row wrap;
    align-content: flex-start;
    background: #fefefe;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1001;
`;
