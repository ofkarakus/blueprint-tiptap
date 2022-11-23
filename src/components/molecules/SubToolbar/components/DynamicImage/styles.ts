import styled from 'styled-components';

export const ImgTd = styled.td<{ $background?: string }>`
    text-transform: none !important;
    font-weight: normal !important;
    background: ${({ $background }) => ($background ? $background : 'white')};
    padding-left: 13px !important;
`;

export const BorderlessTr = styled.tr`
    border: 0 !important;
`;
