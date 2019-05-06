import styled from 'styled-components';
import { 
    themeProps,
    ButtonBase, 
    InputTextBase
 } from '../shared/styles';

export const Input = styled(InputTextBase)`
    width:calc(100% - 70px);
    font-family:'GothamBold';
    font-size:16px;
    line-height: 1.69;
    letter-spacing: 2.8px;
    color: ${props => props.color};
    border-bottom:4px solid ${props => props.color};
    padding:22px 34px;
    height:78px;
    &::placeholder{
        color: ${props => props.color};
    }
`;
Input.defaultProps = {
    color:themeProps.colors.lightBlue
};

export const SubmitButton = styled(ButtonBase)`
    width:70px;
    height:78px;
    background-color:${props => props.backgroundColor};
    display:flex;
    align-items:center;
    justify-content:center;
    padding:0;
`;
SubmitButton.defaultProps = {
    backgroundColor:themeProps.colors.lightBlue
};

export const Form = styled.form`
    > div{
        display:flex;
        max-width:353px;
        margin:0 auto;
        width:100%;
        padding:18px 0;
    }
`;