import styled from 'styled-components';
import {themeProps} from '../shared/styles';

export const Container = styled.div`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:200;
    background-color:${props => props.backgroundColor};
    transform:translate3d(0,0,0);
`;
Container.defaultProps = {
    backgroundColor:themeProps.colors.white
};

export const ProgressBar = styled.div`
    position:fixed;
    top:0;
    left:0;
    width:${props => props.progress}%;
    height:100%;
    background-color:${props => props.backgroundColor};
`;
ProgressBar.defaultProps = {
    progress:0,
    backgroundColor:themeProps.colors.darkBlue
};

export const Number = styled.span`
    position:fixed;
    bottom:0;
    right:0;
    font-family:'Gotham-Bold';
    font-size:400px;
    font-weight:bold;
    letter-spacing: 1.1px;
    color:${props => props.color};
    transform:translate3d(0,0,0);
    
    &:after{
        content:'%';
        font-size:200px;
    }

    @media(max-width:767px){
        font-size:127px;
        &:after{
            font-size:70px;
        }
    }
`;

Number.defaultProps = {
    color:themeProps.colors.lightBlue
};