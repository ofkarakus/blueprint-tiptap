import styled from 'styled-components';
import { toolbar, subtoolbar } from 'utils/constants';
import { WrapperProps } from './types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Wrapper = styled.div<WrapperProps>`
    position: fixed;
    top: 0;
    left: ${({ $isMTbarVisible, $isSTbarVisible }) =>
        $isMTbarVisible
            ? $isSTbarVisible
                ? toolbar.width + 1
                : toolbar.width - subtoolbar.width
            : -subtoolbar.width}px;
    width: ${subtoolbar.width}px;
    height: 100vh;
    font-family: Lato, Arial, Helvetica, sans-serif;
    z-index: 1000;
    background: #fefefe;
    box-shadow: ${({ $isMTbarVisible, $isSTbarVisible }) =>
        $isMTbarVisible ? ($isSTbarVisible ? '0 0 5px rgba(0, 0, 0, 0.15)' : 'none') : 'none'};
    text-align: left;
    transition: left 0.5s, box-shadow 1.5s;
    & td {
        font-size: 10px;
        font-weight: bold;
        text-transform: uppercase;
    }
    & svg {
        margin-right: 5px;
    }
`;

export const Table = styled.table`
    table-layout: fixed;
    width: inherit;
    font-size: 12px;
    & > tr > td {
        border-right: 1px solid rgba(0, 0, 0, 0.2);
        padding: 10px;
    }
    & > tr > td:last-of-type {
        border-right: 0;
    }
    & > tr {
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    }
    border-collapse: collapse;
    border-right: 0;
`;

export const SpecificRow1 = styled.tr`
    display: flex;
    width: inherit;
    & > td:first-of-type {
        flex: 3;
    }
    & > td:last-of-type {
        flex: 2;
    }
`;

export const SpecificRow2 = styled.tr`
    display: flex;
    width: inherit;
    & > td:first-of-type {
        flex: 10;
    }
    & > td:last-of-type {
        flex: 1;
    }
`;

export const SpecificRow3 = styled.tr`
    display: flex;
    width: inherit;
    height: 65px;
    & > td {
        padding: 0 !important;
        width: 100%;
    }
`;

export const ColorTd = styled.td`
    display: flex;
    flexdirection: row;
    alignitems: center;
    padding: 3px !important;
`;

export const ColorBlock = styled.div`
    flex: 1;
    background-color: red;
    height: 100%;
`;

export const ZeroMarginFAIcon = styled(FontAwesomeIcon)`
    margin: 0px !important;
`;
