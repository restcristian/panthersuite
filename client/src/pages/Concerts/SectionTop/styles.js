import styled from 'styled-components';
import {themeProps} from '../../../components/shared/styles';

export const TextContainer = styled.div`
    position:relative;
    max-width:800px;
    margin:0 auto;
    padding:0 24px;
    flex:1;
`;

export const Section = styled.section`
    position:relative;
    background-color:${props => props.backgroundColor};
    height:440px;
    overflow:hidden;
    display:flex;
    align-items:center;
    justify-content:center;

    @media(max-width:767px){
        height:320px;
    }
`;
Section.defaultProps = {
    backgroundColor:themeProps.colors.darkBlue
};

