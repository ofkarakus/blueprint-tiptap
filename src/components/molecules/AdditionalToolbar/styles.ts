import styled, { css } from 'styled-components';
import arrow from 'assets/images/arrow.png';
import { toolbar, addtoolbar } from 'utils/constants';

export const Wrapper = styled.div<{ $isVisible: boolean }>`
    position: fixed;
    top: 0;
    left: ${({ $isVisible }) => ($isVisible ? toolbar.width + 1 : -addtoolbar.width)}px;
    width: ${addtoolbar.width}px;
    z-index: 999;
    box-shadow: ${({ $isVisible }) => ($isVisible ? '0 0 40px rgba(0, 0, 0, 0.25)' : 'none')};
    transition: left 0.75s, box-shadow 2s;
`;

export const Select = styled.select`
    width: 100%;
    appearance: none;
    text-indent: 0.01px;
    background: white url(${arrow}) no-repeat 95% center;
    background-size: 15px;
    border-radius: 0;
    border: 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    height: 32px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.025);
    outline: none;
    padding: 0 10px;
`;

export const HandleShift = styled.div<{ $isOnline: boolean }>`
    left: ${({ $isOnline }) => ($isOnline ? '50%' : '0%')};
    position: absolute;
    width: 50%;
    height: 45px;
    background: linear-gradient(to bottom, #ffffff 0%, #f2f2f2 100%);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    transition: left 0.25s;
    cursor: pointer;
`;

const sharedStyles = css`
    width: 50%;
    height: 45px;
    line-height: 45px;
    float: left;
    font-family: Lato, Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 11px;
    font-weight: bold;
    background-color: rgba(0, 0, 0, 0.015);
    cursor: pointer;
    text-align: center;
    text-transform: uppercase;
    background: whiteSmoke;
`;

export const OnlineStatus = styled.div`
    ${sharedStyles};
    color: #336644;
`;

export const OfflineStatus = styled.div`
    ${sharedStyles};
    color: #b4155d;
`;
