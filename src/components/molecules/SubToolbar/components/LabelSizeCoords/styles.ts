import styled from 'styled-components';
import * as e from '../../styles';

export const LabelInput = styled.input`
    border: 0;
    padding: 0;
    &:focus-visible {
        outline: none;
    }
    width: 100%;
`;

export const SizeInput = styled(e.SizeInput)`
    width: 70%;
`;

export const SizeSpan = styled.span`
    margin-right: 10px;
    opacity: 0.5;
`;
