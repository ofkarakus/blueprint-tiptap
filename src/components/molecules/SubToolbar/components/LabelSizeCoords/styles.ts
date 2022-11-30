import styled from 'styled-components';

export const LabelInput = styled.input`
    border: 0;
    padding: 0;
    &:focus-visible {
        outline: none;
    }
    width: 100%;
`;

export const SizeInput = styled.input`
    border: 0;
    padding: 0;
    &:focus-visible {
        outline: none;
    }
    width: 70%;
`;

export const SizeSpan = styled.span`
    margin-right: 10px;
    opacity: 0.5;
`;
