import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { allProgress } from "../../utils/helpers";

import {
  getEvents,
  getConcertsEvents,
} from "../../store/actions/eventsActions";
import { getSpotlight } from "../../store/actions/spotlightActions";

import LoadingScreen from "../LoadingScreen/LoadingScreen";

function withSiteDataLoad(WrappedComponent) {
  return class extends Component {
    state = {
      dataProgress: 0,
    };
    componentDidMount() {
      allProgress(
        [
          this.props.getEvents(),
          this.props.getSpotlight(),
          this.props.getConcertsEvents(),
        ],
        (progress) => this.setState({ dataProgress: progress })
      );
    }
    arePromisesDone = () => {
      return this.state.dataProgress === 100;
    };
    render() {
      return (
        <React.Fragment>
          <LoadingScreen startLoading={this.arePromisesDone()} />
          <WrappedComponent dataProgress={this.state.dataProgress} />
        </React.Fragment>
      );
    }
  };
}

const composedWithSiteLoad = compose(
  connect(null, {
    getEvents,
    getSpotlight,
    getConcertsEvents,
  }),
  withSiteDataLoad
);

export default composedWithSiteLoad;
