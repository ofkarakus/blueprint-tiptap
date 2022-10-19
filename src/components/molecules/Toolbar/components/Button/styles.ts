import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 65px;
    height: 65px;
    border-bottom: 1px solid #e3e3e3;
    display: flex;
    align-items: center;
    justify-content: center;
    &:nth-of-type(odd) {
        border-right: 1px solid #e3e3e3;
    }
`;
