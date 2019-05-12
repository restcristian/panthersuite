import React, { useState } from 'react';
import ArtistListWithPic from '../ArtistListWithPic/ArtistListWithPic';
import SlideButton from '../Buttons/SlideButton/SlideButton';
import SearchButton from '../../components/SearchButton/SearchButton';

import { themeProps } from '../shared/styles';

import {
    FilterBox,
    Container,
    TabButton,
    SearchForm
} from './styles';

const FilterableArtistList = ({events}) => {
    const filters = {
        artist:{
            text:'Artist',
            isActive:true,
        },
        concert:{
            text:'Concert',
            isActive:false
        },
        place:{
            text:'Place',
            isActive:false
        },
    };
    const [filterTabs, setFilterTabs] = useState(filters);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

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

    const onSeachClick = () =>  {
        setIsSearchOpen( prevState => !prevState);
    };
    const renderSearchForm = () => {
        if(isSearchOpen){
            return (
                <SearchForm>
                    <input type="text" placeholder = "artist, concert, place" />
                </SearchForm>
            );
        }
        return null;
    }
    return (
        <Container>
            <FilterBox>
                <span>Search by:</span>
                <ul>
                    {renderTabItems()}
                </ul>
                <div>
                    <SearchButton
                     color = {themeProps.colors.black}
                     onClick = {onSeachClick} />
                </div>
               {renderSearchForm()}
            </FilterBox>
            <ArtistListWithPic items = {events} />
        </Container>
    );
};

export default FilterableArtistList;