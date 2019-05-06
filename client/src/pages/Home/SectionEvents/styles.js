import styled from 'styled-components';
import {themeProps, Row} from '../../../components/shared/styles';

export const TitleWrapper = styled.div`
    max-width:259px;
    position:absolute;
    top:-23px;
    left:50%;
    transform:translateX(-50%);
    background-color:inherit;
    width:259px;

    h2{
        margin:0;
        padding:0;
        text-align:center;
        font-family:'GothamMedium';
        font-size:22px;
        line-height:108px;
        letter-spacing:0.9px;
        font-weight:500;
        background-color:${props => themeProps.colors.darkBlue};
        color:${props => themeProps.colors.lightBlue};
        margin-top:23px;
        position:relative;
        text-transform:uppercase;
        height:108px;
    }
`;
export const SectionEventsStyled = styled.section`
    position:relative;
    background-color: ${props => props.backgroundColor};
    padding-top:131px;
    
    ${Row}{
        background-color:inherit;
    }
`;
export const ButtonContainer = styled.div`
    display:flex;
    justify-content:flex-end;
    padding:48px;
    padding-right:0;
    max-width:1080px;
    margin:0 auto;

    @media(max-width:1023px){
        justify-content:center;
    }
    @media(max-width:767px){
        padding:0;
        padding-bottom:48px;
    }
`;
SectionEventsStyled.defaultProps = {
    backgroundColor:themeProps.colors.white
};