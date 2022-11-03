import styled from 'styled-components';
import { toolbar, subtoolbar } from 'utils/constants';

export const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: ${toolbar.width + 1}px;
    width: ${subtoolbar.width}px;
    height: 100vh;
    font-family: Lato, Arial, Helvetica, sans-serif;
    z-index: 1000;
    background: #fefefe;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
    text-align: left;
`;
