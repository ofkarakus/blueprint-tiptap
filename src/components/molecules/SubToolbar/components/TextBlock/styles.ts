import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SpecificFAIcon = styled(FontAwesomeIcon)<{ $selected: boolean }>`
    font-size: 17px;
    opacity: ${({ $selected }) => ($selected ? 1 : 0.25)};
    margin-right: 12px !important;
    cursor: pointer;
`;
