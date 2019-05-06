import styled from 'styled-components';
import {themeProps, ButtonBase} from '../../shared/styles.js';

export const SlideButtonStyled = styled(ButtonBase)`
    font-family:'GothamBold';
    font-size:13px;
    letter-spacing:7.3px;
    text-transform:uppercase;
    position:relative;
    padding:4px 21px;
    outline:none;
    
    &:before{
        content:'';
        position:absolute;
        top:0;
        left:0;
        width:37px;
        height:100%;
        background-color:${props => props.slideColor};
        transition:width .2s ease-in-out;
    }

    > div{
        position:relative;
    }

    &:hover{
        &:before{
            width:100%;
        }
    }
`;
SlideButtonStyled.defaultProps = {
    slideColor:themeProps.colors.lightBlue
};