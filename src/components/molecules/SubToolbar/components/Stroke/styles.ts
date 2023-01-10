import styled from 'styled-components';
import * as e from '../../styles';

export const SizeInput = styled(e.SizeInput)`
    width: 70%;
`;

export const Select = styled.select`
    border: 0;
    padding: 0;
    &:focus-visible {
        outline: none;
    }
`;
