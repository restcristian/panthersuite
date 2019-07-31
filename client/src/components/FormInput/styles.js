import styled from 'styled-components';
import { themeProps, InputTextBase } from '../shared/styles'

export const Input = styled(InputTextBase)` 
    font-family:'GothamBold';
    font-size:16px;
    line-height:1.69;
    text-align:left;
    color: ${props => props.color};
    border-bottom:4px solid ${props => props.color}
    opacity:0.7;
    padding:21px;
    display:block;
    width:100%;
    &::placeholder{
        color:${props => props.color}
    }
`; 

Input.defaultProps = {
    color:themeProps.colors.lightBlue
};