import React from 'react';
import {
    SVGVideoMaskContainer,
    VideoStyled,
    ImageContainer,
    SVGVideoMaskWrapper
} from './styles';
import LogoMask from './svgs/LogoMask';
import TextMask from './svgs/TextMask';

const SVGVideoMask = props => {
    let maskId = "";
    const renderMask = () => {
        switch (props.svgMask) {
            case 'logo':
                maskId = "logoMask";
                return (
                    <ImageContainer maskId={maskId} className={maskId}>
                        <LogoMask maskId={maskId} />
                    </ImageContainer>
                );
            case 'text':
                    maskId = "textMask";
                    return(
                        <ImageContainer maskId = {maskId} className = {maskId}>
                            <TextMask maskId = {maskId} text = {props.children}/>
                        </ImageContainer>
                    )
            default:
                return null;
        }
    }
    return (
        <SVGVideoMaskWrapper aspectRatio = {props.aspectRatio}>
            <SVGVideoMaskContainer>
                <VideoStyled autoPlay loop muted>
                    <source src={props.videoUrl} type="video/mp4" />
                </VideoStyled>
                {renderMask()}

            </SVGVideoMaskContainer >
        </SVGVideoMaskWrapper>
    );
};

export default SVGVideoMask;