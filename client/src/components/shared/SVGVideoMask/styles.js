import styled from 'styled-components';
import { themeProps } from '../../shared/styles';


export const ImageContainer = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    overflow:hidden;
    &.logoMask{
    }
    svg{
        width:100%;
        height:100%;
        position:absolute;
        top:0;
        left:0;
    }
    svg mask rect{
        fill:${props => themeProps.colors.white};
    }
    svg > rect{
        mask:url(#${props=> props.maskId});
        fill: ${props => props.backgroundColor}
    }

    svg text{
        font-size:41px;
        font-family:'GothamBold';
        font-weight:bold;
    }
`;

ImageContainer.defaultProps = {
    backgroundColor:themeProps.colors.darkBlue,
    maskId:'mask'
};

export const VideoStyled = styled.video`
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    width:auto;
    height:100%;
`;

export const SVGVideoMaskWrapper = styled.div`
    position:relative;
    width:100%;
    height:0;
    padding-top:${props => props.aspectRatio}%;
`;
SVGVideoMaskWrapper.defaultProps = {
    aspectRatio:126
};

export const SVGVideoMaskContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow:hidden;

    &:before{
        content:'';
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        z-index:1;
        opacity:0.45;
        background-color:${props => props.backgroundColor };
    }
`;

SVGVideoMaskContainer.defaultProps = {
    backgroundColor: themeProps.colors.darkBlue
};

