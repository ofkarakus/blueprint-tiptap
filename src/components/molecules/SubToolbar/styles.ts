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
`;
