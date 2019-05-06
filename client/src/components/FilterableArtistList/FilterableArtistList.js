import React, { useState } from 'react';
import ArtistListWithPic from '../ArtistListWithPic/ArtistListWithPic';
import SlideButton from '../Buttons/SlideButton/SlideButton';
import { themeProps } from '../shared/styles';

import {
    FilterBox,
    Container
} from './styles';

const FilterableArtistList = props => {
    return (
        <Container>
            <FilterBox>
                <ul>
                    <li>Search by:</li>
                    <li>
                        <SlideButton slideColor={themeProps.colors.orange}>
                            All
                        </SlideButton>
                    </li>

                    <li>
                        <SlideButton slideColor={themeProps.colors.orange}>
                            Month
                        </SlideButton>
                    </li>
                    <li>
                        <SlideButton slideColor={themeProps.colors.orange}>
                            Genre
                        </SlideButton>
                    </li>
                </ul>
            </FilterBox>
            {/* <ArtistListWithPic /> */}
        </Container>
    );
};

export default FilterableArtistList;