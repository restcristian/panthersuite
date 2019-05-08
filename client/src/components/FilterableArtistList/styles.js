import styled from 'styled-components';
import {themeProps, ButtonBase} from '../shared/styles';

export const TabButton = styled(ButtonBase)`
    font-family:'GothamMedium';
    font-size:16px;
    letter-spacing:1px;
    color:${props => props.color};
    position:relative;
    padding: 3px 24px;
    outline:none;
    &:before{
        content:'';
        position:absolute;
        top:0;
        left:0;
        width:0;
        height:100%;
        background-color:${props => props.backgroundColor};
        transition: width .4s ease-in-out;
    }
    >span{
        position:relative;
    }
`;
TabButton.defaultProps = {
    color:themeProps.colors.gray1,
    backgroundColor:themeProps.colors.orange
};

export const FilterBox = styled.div`
    max-width:749px;
    width:100%;
    margin:0 auto;
    background-color: ${props => props.backgroundColor};
    padding:30px 80px;
    display:flex;
    
    >ul{
        margin:0;
        padding:0;
        list-style-type:none;
        display:flex;
        flex:1;
        justify-content:space-between;
        align-items:center;
        font-family:'GothamBook';
        color:${props => props.color};
        font-size:16px;
        letter-spacing:1;

        li.active ${TabButton}{
            &:before{
                width:35px;
            }
        }
        li ${TabButton}:hover{
            &:before{
                width:100%;
            }
        }
    }
`;
FilterBox.defaultProps = {
    backgroundColor:themeProps.colors.lightBlue2,
    color:themeProps.colors.gray1
};



export const Container = styled.div``;