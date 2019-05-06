import styled from 'styled-components';
import { themeProps } from '../shared/styles';
/**
 * @component NavBarContainer
 * @returns -Returns a styled nav item
 */
export const NavBarContainer = styled.nav`
    background-color:${props => props.backgroundColor};
    position:relative;
`;

NavBarContainer.defaultProps = {
    backgroundColor: themeProps.colors.darkBlue
};
/**
 * @component Wrapper
 * @returns -Retunrs a styled div
 */
export const Wrapper = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:106px;
`;

export const LogoContainer = styled.div`
    max-width:218px;
    >img{
        width:100%;
    }
`;
/**
 * @component LinksList
 * @returns -Retunrs a styled nav ul
 */
export const LinksList = styled.ul`
    display:flex;
    align-items:center;
    list-style-type:none;
    margin:0;
    padding:0;
    li{
        padding:0 17px;
        
    }
    li a {
        text-decoration:none;
        font-family: GothamMedium;
        font-size: 13px;
        font-weight: 500;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: 1.1px;
        text-align: center;
        color:${props => props.fontColor}
    }

    &.isMobile{
        position:absolute;
        top:100%;
        left:0;
        display:block;
        background-color:black;
        width:100%;
        max-height:0;
        overflow:auto;
        transition:max-height .5s ease-in-out;

        li a{
            display:block;
            padding:24px 17px;
        }
        &.isOpen{
            max-height:calc(100vh - 240px);
        }
    }
    
`;

LinksList.defaultProps = {
    fontColor: '#fff'
};

export const RightPanel = styled.div`
    display:flex;
    align-items:center;
`;