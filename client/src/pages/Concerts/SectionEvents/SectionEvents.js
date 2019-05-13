import React from 'react';
import {
    Section
} from './styles';
import { connect } from 'react-redux';
import FilterableArtistList from '../../../components/FilterableArtistList/FilterableArtistList';


const SectionEvents = props => {
    return (
        <Section>
            <FilterableArtistList events={props.events} />
        </Section>
    );
};

const mapStateToProps = state => {
    return {
        events: state.concertEvents
    };
};
export default connect(mapStateToProps)(SectionEvents);