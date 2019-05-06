import styled from 'styled-components';
import { themeProps } from '../../../components/shared/styles';

export const Wrapper = styled.div`
    max-width:574px;
    margin:0 auto;
    text-align:center;
`;

export const Heading = styled.h2`
    font-family:'GothamMedium';
    font-weight:500;
    color:${props => props.color};
    font-size:40px;
    line-height: 1.1;
    letter-spacing: 1.8px;
    margin:0;
    padding:0;

    > span{
        color:${props => props.hightlightColor};
    }

    @media(max-width:767px){
        font-size:33px;
    }

`;
Heading.defaultProps = {
    color: themeProps.colors.darkBlue,
    hightlightColor:themeProps.colors.orange
};

export const Section = styled.section`
    padding-bottom:30px;
    background-color:${props => props.backgroundColor};
`;

Section.defaultProps = {
    backgroundColor:themeProps.colors.white
};