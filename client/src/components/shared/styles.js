import styled from 'styled-components';

export const themeProps = {
    maxWidth: 1300,
    paddingHorizontal: 12,
    colors: {
        lightBlue: '#a9daeb',
        lightBlue2: '#c2dde6',
        darkBlue:'#081420',
        mediumBlue:'#0a1c2e',
        black:'#000000',
        gray1:'#4f5256',
        white:'#ffffff',
        orange:'#e05915'
    },
};
export const Row = styled.div`
    max-width:${props => props.maxWidth}px;
    margin:0 auto;
    padding:0 ${props => props.paddingHorizontal}px;
    width:100%;
`;

Row.defaultProps = {
    maxWidth: themeProps.maxWidth,
    paddingHorizontal: themeProps.paddingHorizontal
};

// Button Base

export const ButtonBase = styled.button`
    -webkit-appearance: none;
    appereance:none;
    background: transparent;
    border: none;
    cursor:pointer;
`;

export const InputTextBase = styled.input`
    -webkit-appereance:none;
    appereance:none;
    border:none;
    outline:none;
`;

export const LinkBase = styled.a`
    text-decoration:none;
    color:inherit;
`;