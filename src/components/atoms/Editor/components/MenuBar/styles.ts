import styled from 'styled-components';

export const Wrapper = styled.ul`
    display: block;
    min-width: 249px;
    min-height: 32px;
    margin: 0;
    padding: 0;
    background-color: white;
    color: white;
    box-shadow: 0 0 3px rgb(0 0 0 / 15%);
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
`;

export const BtnWrapper = styled.li`
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    float: left;
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    color: white;

    &:last-of-type {
        border-right: 0;
    }
`;
