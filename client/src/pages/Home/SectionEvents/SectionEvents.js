import React from 'react';
import { Scene, Controller } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import { connect } from 'react-redux';
// import { getEvents } from '../../../store/actions/eventsActions';
import {
    Row
} from '../../../components/shared/styles';
import {
    SectionEventsStyled,
    TitleWrapper,
    ButtonContainer
} from './styles';
import SlideButton from '../../../components/Buttons/SlideButton/SlideButton';
import ArtistListWithPic from '../../../components/ArtistListWithPic/ArtistListWithPic';
const SectionEvents = props => {
    return (
        <SectionEventsStyled>
            <Row>
                {/* Title heading to be animated */}
                <TitleWrapper>
                    <Controller>
                        <Scene triggerHook="0.7" duration="20%">
                            <Timeline
                                target={
                                    <h2>Next Events</h2>
                                }>
                                <Tween
                                    from={{ y: -23 }}
                                    to={{ y: 0 }}
                                />
                            </Timeline>
                        </Scene>
                    </Controller>
                </TitleWrapper>
                {/* /Title heading to be animated */}
                <ArtistListWithPic items={props.upcoming_events} />
                <ButtonContainer>
                    <SlideButton>See All Events</SlideButton>
                </ButtonContainer>
            </Row>
        </SectionEventsStyled>
    );
};

const mapStateToProps = state => {
    return {
        upcoming_events: state.events
    };
};

export default connect(mapStateToProps, null)(SectionEvents);