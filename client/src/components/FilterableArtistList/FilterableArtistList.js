import React, { useState, useRef } from 'react';
import { TweenMax } from 'gsap';
import { Transition } from 'react-transition-group';
import {connect} from 'react-redux';

import {getFilteredConcersEvents} from '../../store/actions/eventsActions';

import ArtistListWithPic from '../ArtistListWithPic/ArtistListWithPic';
import SearchButton from '../../components/SearchButton/SearchButton';

import { themeProps } from '../shared/styles';

import {
    FilterBox,
    Container,
    TabButton,
    SearchForm
} from './styles';

const FilterableArtistList = ({ events, getFilteredConcersEvents }) => {
    const filters = {
        artist: {
            text: 'Artist',
            isActive: true,
        },
        venue: {
            text: 'Venue',
            isActive: false
        },
        location: {
            text: 'Location',
            isActive: false
        },
    };
    const [filterTabs, setFilterTabs] = useState(filters);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchText, setSearchText] = useState('');

    const searchFormRef = useRef(null);

    const renderTabItems = () => {
        const keys = Object.keys(filterTabs);
        const listItems = keys.map((key) => {

            return (
                <li
                    key={filterTabs[key].text}
                    className={filterTabs[key].isActive ? 'active' : ''}>
                    <TabButton
                        onClick={() => onTabClick(key)}>
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
                [key]: {
                    ...prevState[key],
                    isActive: !prevState[key].isActive
                }
            }
        });
    };

    const onSeachClick = () => {
        setIsSearchOpen(prevState => !prevState);
    };

    const onSearchChange = e => {
        setSearchText(e.target.value);
    };

    const onSearchSubmit = e => {
        e.preventDefault();
        getFilteredConcersEvents(searchText,filterTabs);

    };

    const renderSearchForm = () => {

        return (
            <Transition
                timeout={1000}
                unmountOnExit
                mountOnEnter
                in={isSearchOpen}
                addEndListener={(node, done) => {
                    TweenMax.to(node, 0.5, {
                        css: { width: isSearchOpen ? "100%" : 0 },
                        onComplete: done
                    });
                }}
            >
                <SearchForm ref={searchFormRef} onSubmit = {onSearchSubmit}>
                    <input
                        type="text"
                        placeholder="artist, concert, place"
                        onChange={onSearchChange}
                        val={searchText} />
                </SearchForm>
            </Transition>

        );

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
                        color={themeProps.colors.black}
                        onClick={onSeachClick} />
                </div>
                {renderSearchForm()}
            </FilterBox>
            <ArtistListWithPic items={events} />
        </Container>
    );
};

export default connect(null, {getFilteredConcersEvents})(FilterableArtistList);