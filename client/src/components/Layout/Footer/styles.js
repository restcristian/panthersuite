import styled from 'styled-components';
import { themeProps, LinkBase, Row } from '../../shared/styles';

const getPseudoWidth = () => {
    return themeProps.maxWidth - (themeProps.paddingHorizontal / 2);
}

export const Col = styled.div`
    padding:48px 0;
    position:relative; 
    &.logoColumn{
        background-color:${props => props.backgroundColorPrimary};
        width:404px;
        &:before{
            content:'';
            position:absolute;
            top:0;
            right:100%;
            width:calc((100vw - ${getPseudoWidth()}px) / 2 );
            height:100%;
            background-color:${props => props.backgroundColorPrimary};
        }
       
    }
    &.linksColumn{
        flex:1;
        background-color:${props => props.backgroundColorSecondary};
        padding-left:60px;
        &:before{
            content:'';
            position:absolute;
            top:0;
            left:100%;
            width:calc((100vw - ${getPseudoWidth()}px) / 2 );
            height:100%;
            background-color:${props => props.backgroundColorSecondary};
        }
    }

    @media(max-width:1300px){
        &.logoColumn:before, 
        &.linksColumn:before{
            width:${themeProps.paddingHorizontal}px;
        } 
     }
`;

Col.defaultProps = {
    backgroundColorPrimary: themeProps.colors.lightBlue,
    backgroundColorSecondary: themeProps.colors.darkBlue
};
export const FooterWrapper = styled.div`
    display:flex;
`




export const LogoText = styled.p`
    padding-left:98px;
    margin:0;
    line-height:1.54;
    color: ${props => props.color};
    letter-spacing:1.2px;
`;

LogoText.defaultProps = {
    color: themeProps.colors.darkBlue
};

export const EmailLink = styled(LinkBase)`
`;


export const LinksColumnWrapper = styled.div`
    display:flex;
    justify-content:space-between;
`

export const LinksList = styled.ul`
    margin:0;
    padding:0;
    list-style-type:none;
    font-family:'GothamMedium';
    font-size: 14px;
    color: ${props => props.color};
    letter-spacing:1.2px;

    li{
        margin-bottom:19px;
    }
`;

LinksList.defaultProps = {
    color: themeProps.colors.white
};


export const LinksListWrapper = styled.div`
    display:flex;

    ${LinksList}:nth-child(2){
        padding-left:137px;
    }
`;

export const IconsWrapper = styled.div`
    >ul{
        margin:0;
        padding:0;
        display:flex;
        list-style-type:none;
        position:relative;
        padding-bottom:24px;
        
        &:before{
            content:'';
            position:absolute;
            bottom:0;
            right:0;
            width:70px;
            height:1px;
            background-color:${themeProps.colors.white}
        }
       
        li{
            padding-right:40px;
            &:last-child{
                padding-right:0;
            }
        }
    }
`;

export const FooterContainer = styled.div`
    font-family:'GothamBook';
    font-size:13px;

    @media(max-width:1023px){
        ${FooterWrapper}{
            display:block;
        }
        ${Row}{
            padding:0;
        }
        ${Col}{
            padding-left:12px;
            padding-right:12px;
        }
        .logoText{
            padding-left:20px;
        }
        ${Col}.logoColumn{
            width:100%;
            justify-content: center;
            align-items: center;
            display:flex;
            &:before{
                display:none;
            }
        }
        ${Col}.linksColumn{
            &:before{
                display:none;
            }
        }
    }

    @media(max-width:630px){
        ${LinksColumnWrapper}{
            display:block;
        }
        ${IconsWrapper} > ul{
            justify-content:center;
            margin-top:12px;
            &:before{
                display:none;
            }
        }
        ${LinksListWrapper}{
            justify-content:center;
        }

    }

    @media(max-width:400px){
        ${Col}.logoColumn{
            display:block;
            text-align:center;
        }
    }
`;