import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import { connect } from "react-redux";
import { getInitialLetter } from "../../../utils/helpers";
import {
  SpotlightSection,
  Col,
  ArtistHeading,
  ArtistSubHeading,
  ArtistDescription,
  ScrollingLetter,
} from "./styles";
import SquaredButton from "../../../components/Buttons/SquaredButton/SquaredButton";
import { Row } from "../../../components/shared/styles";

const SectionSpotlight = ({ getSpotlight, spotlight }) => {
  return (
    <SpotlightSection>
      <Controller>
        <Scene triggerHook="0.7" duration="100%">
          <Timeline
            target={
              <ScrollingLetter>
                {getInitialLetter(spotlight.performers_name)}
              </ScrollingLetter>
            }
          >
            <Tween
              from={{ y: "-300%", x: "-50%" }}
              to={{ y: "-40%", x: "-50%" }}
            />
          </Timeline>
        </Scene>
      </Controller>
      <Row>
        <Col className="col-1">
          <img src={spotlight.image_url} alt={spotlight.performers_name} />
        </Col>
        <Col className="col-2">
          <ArtistHeading>{spotlight.performers_name}</ArtistHeading>
          <ArtistSubHeading>{spotlight.event_name}</ArtistSubHeading>
          <ArtistDescription>{spotlight.description}</ArtistDescription>
          <SquaredButton slide>Go to details</SquaredButton>
        </Col>
      </Row>
    </SpotlightSection>
  );
};

const mapStateToProps = (state) => {
  return {
    spotlight: state.spotlight,
  };
};

export default connect(mapStateToProps, null)(SectionSpotlight);
