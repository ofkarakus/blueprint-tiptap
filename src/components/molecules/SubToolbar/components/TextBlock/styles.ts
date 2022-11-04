import styled from 'styled-components';

export const Table = styled.table`
    table-layout: fixed;
    width: inherit;
    font-size: 12px;
    & > tr > td {
        border-right: 1px solid rgba(0, 0, 0, 0.2);
        padding: 10px;
    }
    & > tr {
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    }
    border-collapse: collapse;
    border-right: 0;
`;

export const ColorRow = styled.tr`
    display: flex;
    width: inherit;
    & > td:first-of-type {
        flex: 3;
    }
    & > td:last-of-type {
        flex: 2;
    }
`;
