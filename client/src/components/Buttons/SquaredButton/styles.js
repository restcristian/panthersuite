import styled from 'styled-components';
import { ButtonBase, themeProps } from '../../shared/styles';

export const ButtonContainer = styled(ButtonBase)`
    padding:30px 0;
    color:${props => props.textColor};
    border:1px solid ${props => props.borderColor};
    font-family:'GothamBold';
    font-size:13px;
    letter-spacing: 7.3px;
    position:relative;
    text-transform:uppercase;
    max-width:285px;
    width:100%;
    text-align:center;
    &.slide{
        &:before{
            content:'';
            position:absolute;
            top:0;
            left:0;
            width:0;
            height:100%;
            background-color:${props => props.hoverBackgroundColor};
            transition:width .2s ease-in-out;
        }
        &:hover{
            color:${props => props.hoverTextColor}
            &:before{
                width:100%;
            }
        }
    }
    &:not(.slide){
        transition: background-color .2s ease-in-out;
      &:hover{
        background-color:${props => props.hoverBackgroundColor}
        color:${props => props.hoverTextColor}
      }
    }
`;

ButtonContainer.defaultProps = {
    textColor: themeProps.colors.white,
    borderColor: themeProps.colors.white,
    backgroundColor: 'transparent',
    hoverBackgroundColor: themeProps.colors.white,
    hoverTextColor: themeProps.colors.black

};

export const ButtonInner = styled.div`
    position:relative;
`;