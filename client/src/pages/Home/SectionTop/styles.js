import styled from 'styled-components';
import { themeProps } from '../../../components/shared/styles';


export const SectionWrapper = styled.div`
    display:flex;
    max-width:877px;
    margin:0 auto;
    width:100%;
    align-items:center;
`;

export const Col = styled.div`
    padding:0 12px;
    position:relative;
`;

export const HeaderText = styled.h3`
    margin:0;
    padding:0;
    text-align:right;;
    color:${props => props.color}
    font-family:'GothamBold';
    font-size: 50px;
    line-height:1.16;
    letter-spacing: 1.8px;
`;

HeaderText.defaultProps = {
    color: themeProps.colors.white
};

export const ButtonWrapper = styled.div`
    text-align:right;
    padding-top:56px;
`;
export const Section = styled.section`
    position:relative;
    width:100%;
    height:calc(100vh - 106px);
    background-color:${props => props.backgroundColor};
    display:flex;
    align-items:center;
    overflow:hidden;
    padding:24px 0px;
    
    ${Col}{
        &.col-1{
            flex:1;
            padding-right:50px;
        }
        &.col-2{
            width:406px;
        }
    }

    @media(max-width:767px){
        height:auto;
        ${SectionWrapper}{
            display:block;
        }
        ${Col}{
            &.col-1{
                margin:0 auto;
                flex:auto;
                width:100%;
                max-width:230px;
                padding-right:12px;
            }
            &.col-2{
                max-width:320px;
                margin:0 auto;
                width:100%;
            }
        }
        ${HeaderText}{
            font-size: 34px;
            text-align: center;
            padding-top:20px;
        }
        ${ButtonWrapper}{
            text-align:center;
            padding-top:24px;
        }
    }
`;

Section.defaultProps = {
    backgroundColor:themeProps.colors.darkBlue
}