import styled from 'styled-components';
import { themeProps, Row } from '../../../components/shared/styles';

export const Col = styled.div`
    position:relative;
    &.col-1{
        flex:1;
        display:flex;
        align-items:flex-end;
        padding-top:100px;
        img{
            max-width:500px;
            height:auto;
            width:100%;
        }
    }
    &.col-2{
        width: 696px;
        padding-top: 80px;
        padding-right: 228px;
        padding-left: 24px;
        padding-bottom: 162px;
    }
`;

export const ArtistHeading = styled.h2`
    font-family:'GothamBold';
    color:${props=> props.color};
    margin:0;
    padding:0;
    font-size: 50px;
    line-height: 1.16;
    letter-spacing: 2.8px;
`;

ArtistHeading.defaultProps = {
    color:themeProps.colors.white
};

export const ArtistSubHeading = styled.h1`
    font-family:'GothamLight';
    color:${props => props.color};
    margin:0;
    padding:0;
    font-size: 50px;
    line-height: 1.16;
    letter-spacing: 2.8px;
    font-weight:300;
`;

ArtistSubHeading.defaultProps = {
    color:themeProps.colors.white
};

export const ArtistDescription = styled.p`
    font-family:'GothamMedium';
    color: ${props => props.color};
    font-weight:500;
    font-size: 16px;
    line-height: 1.94;
    letter-spacing: 1.1px;
`;

ArtistDescription.defaultProps = {
    color: themeProps.colors.lightBlue
};

export const ScrollingLetter = styled.span`
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    font-size:600px;
    color:${props => props.color};
    opacity:0.06;
    font-family:'GothamBold';
`;

ScrollingLetter.defaultProps = {
    color:themeProps.colors.lightBlue
};

export const SpotlightSection = styled.section`
    position:relative;
    overflow:hidden;
    background-color:${props => props.backgroundColor};

    ${Row}{
        display:flex;
    }
    @media(max-width:1099px){
        ${Col}{
            &.col-1{
                max-width:370px;
                flex:1 0 auto;
            }
            &.col-2{
                width:100%;
                max-width:628px;
                padding-right:0;
            }
        }
    }
    @media(max-width:767px){
       ${Row}{
           flex-direction:column;
           align-items:center;
       } 
       ${Col}{
           &.col-1{
               order:2;
               padding-top:24px;
           }
           &.col-2{
               order:1;
               padding-bottom: 0;
               padding-top: 48px;
               padding-left:12px;
               padding-right:12px;
               text-align:center;
           }
           ${ArtistHeading},${ArtistSubHeading}{
               font-size:34px;
           }
       }
       ${ScrollingLetter}{
           font-size:400px;
       }
    }
`;
SpotlightSection.defaultProps = {
    backgroundColor:themeProps.colors.mediumBlue
};  
