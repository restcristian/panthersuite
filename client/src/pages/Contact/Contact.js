import React from 'react';
import {
    Row,
    themeProps
} from '../../components/shared/styles';
import SVGVideoMask from '../../components/shared/SVGVideoMask/SVGVideoMask';
import video from '../../assets/videos/videotest.mp4';
import {
    Col,
    Wrapper,
    Title
} from './styles';
import SlideButton from '../../components/Buttons/SlideButton/SlideButton';
import ContactForm from './ContactForm/ContactForm';

const Contact = props => {
    return (
        <div>
            <Row>
                <Wrapper>
                    <Col className="col-1">
                        <SVGVideoMask
                            svgMask="text"
                            videoUrl={video}
                            backgroundColor={themeProps.colors.white}>
                            <text x="125" y="60" style={{ fontSize: '60px' }}>C</text>
                        </SVGVideoMask>
                    </Col>
                    <Col className="col-2">
                        <Title>Want to <span>receive</span> notifications about events near you? </Title>
                        <ContactForm />
                    </Col>
                </Wrapper>
            </Row>
        </div>
    );
};

export default Contact;