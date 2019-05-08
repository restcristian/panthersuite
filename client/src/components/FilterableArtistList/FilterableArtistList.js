import React, { useState } from 'react';
import ArtistListWithPic from '../ArtistListWithPic/ArtistListWithPic';
import SlideButton from '../Buttons/SlideButton/SlideButton';
import { themeProps } from '../shared/styles';

import {
    FilterBox,
    Container,
    TabButton
} from './styles';

const FilterableArtistList = ({events}) => {
    const filters = {
        all:{
            text:'All',
            isActive:true,
        },
        month:{
            text:'Month',
            isActive:false
        },
        genre:{
            text:'Genre',
            isActive:false
        }
    };
    const [filterTabs, setFilterTabs] = useState(filters);

    const renderTabItems = () => {
        const keys = Object.keys(filterTabs);
        const listItems = keys.map((key) => {
            
            return (
                <li 
                    key = {filterTabs[key].text}
                    className = {filterTabs[key].isActive ? 'active' : ''}>
                    <TabButton 
                        onClick = {()=> onTabClick(key)}>
                        <span>{filterTabs[key].text}</span>
                    </TabButton>
                </li>
            );
        });

        return listItems;
    }

    const onTabClick = key => {
        
        setFilterTabs(prevState => {
            return {
                    ...prevState, 
                    [key]:{
                        ...prevState[key],
                        isActive:!prevState[key].isActive
                    }
                }
        });
    };
    return (
        <Container>
            <FilterBox>
                <ul>
                    <li>Search by:</li>
                    {renderTabItems()}
                </ul>
            </FilterBox>
            <ArtistListWithPic items = {events} />
        </Container>
    );
};

export default FilterableArtistList;