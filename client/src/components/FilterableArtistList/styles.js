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

export const SearchForm = styled.form`
    position:absolute;
    top:50%;
    right: 124px;
    /* width: calc(100% - 300px); */
    width:0;
    height:40px;
    transform:translateY(-50%);
    background-color:red;
    max-width:449px;

    >input{
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        -webkit-appearance:none;
        border:none;
        padding:0 17px;
        font-family:'GothamBook';
        line-height:1.69;
        font-size:16px;
        color:${props => props.color};
        &::placeholder{
            color:${props => props.color};
        }
    }
`;
SearchForm.defaultProps = {
    color:themeProps.colors.lightBlue
};

export const FilterBox = styled.div`
    max-width:749px;
    width:100%;
    margin:0 auto;
    background-color: ${props => props.backgroundColor};
    padding:30px 80px;
    display:flex;
    align-items:center;
    position:relative;

    >span{
        font-family:'GothamBook';
        font-size:16px;
        letter-spacing:1;
        color:${props => props.color};
        padding-right:30px;
        display:inline-block;
    }
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
        position:relative;
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
    @media(max-width:767px){
        padding:21px 15px;
        justify-content:space-between;
        
        >span{
            font-size: 13px;
            padding:0;
        }
        >ul{
            max-width:200px;

            li ${TabButton}{
                font-size:12px;
                padding: 3px 6px;
            }
            li.active ${TabButton}{
                &:before{
                    width:20px;
                }
            }
        }
        ${SearchForm}{
            right:58px;
            width:calc(100% - 153px);
            max-width:369px;
        }
    }
`;
FilterBox.defaultProps = {
    backgroundColor:themeProps.colors.lightBlue2,
    color:themeProps.colors.gray1
};



export const Container = styled.div``;