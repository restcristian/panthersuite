import React from 'react';
import {
    Row
} from '../../../components/shared/styles';
import {
    Section,
    SectionWrapper,
    Col,
    HeaderText,
    ButtonWrapper
} from './styles';
import myVideo from '../../../assets/videos/videotest.mp4';
import SquaredButton from '../../../components/Buttons/SquaredButton/SquaredButton';
import SVGVideoMask from '../../../components/shared/SVGVideoMask/SVGVideoMask';
const SectionTop = () => {
    return (
        <Section>
            <Row>
                <SectionWrapper>
                    <Col className="col-1">
                        <SVGVideoMask
                            svgMask="logo"
                            videoUrl={myVideo} />
                    </Col>
                    <Col className="col-2">
                        <HeaderText>
                            Panther Suite
                            finds concerts
                            Around you
                        </HeaderText>
                        <ButtonWrapper>
                            <SquaredButton slide>Look All</SquaredButton>
                        </ButtonWrapper>
                    </Col>
                </SectionWrapper>
            </Row>
        </Section>
    );
};

export default SectionTop;