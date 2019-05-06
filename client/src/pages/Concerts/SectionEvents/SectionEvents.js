import React from 'react';
import {
    Section
} from './styles';

import FilterableArtistList from '../../../components/FilterableArtistList/FilterableArtistList';

const SectionEvents = props => {
    return(
        <Section>
            <FilterableArtistList  />
        </Section>
    );
};

export default SectionEvents;