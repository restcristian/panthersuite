import styled from 'styled-components';
import {themeProps} from '../shared/styles';

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

        li > button {
            text-transform:none;
            letter-spacing:1px;
            font-size:16px;
            color:${props => props.color};
        }
    }
`;
FilterBox.defaultProps = {
    backgroundColor:themeProps.colors.lightBlue2,
    color:themeProps.colors.gray1
};

export const Container = styled.div``;