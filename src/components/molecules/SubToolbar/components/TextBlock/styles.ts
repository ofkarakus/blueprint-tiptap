import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SpecificFAIcon = styled(FontAwesomeIcon)<{ $selected: boolean }>`
    font-size: 17px;
    opacity: ${({ $selected }) => ($selected ? 1 : 0.25)};
    margin-right: 12px !important;
    cursor: pointer;
`;

export const XMarkDiv = styled.div`
    width: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 3px;
`;
