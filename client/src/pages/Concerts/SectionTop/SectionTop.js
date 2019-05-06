import React from 'react';
import {
    Section,
    TextContainer
} from './styles';
import SVGVideoMask from '../../../components/shared/SVGVideoMask/SVGVideoMask';
import myVideo from '../../../assets/videos/videotest.mp4';

const SectionTop = props => {
    return (
        <Section>
            <TextContainer>
                <SVGVideoMask
                    aspectRatio = {60}
                    svgMask="text"
                    videoUrl={myVideo}>
                    <text x="72" y="50">Events</text>
                </SVGVideoMask>
            </TextContainer>
           
        </Section>
    );
}

export default SectionTop; 