import React, {useState, useEffect} from 'react';
import { Transition } from 'react-transition-group';
import { TweenMax } from 'gsap';
import {
    ListItem,
    ListItemInner,
    Content,
    BottomContent,
    ArtistTitle,
    ArtistLocation,
    ArtistVenue,
    SeeMoreBtn,
    Date
} from './styles.js';

const AristItemWithPic = ({ index, item }) => {
    const { _id, event_date, image_url, location, name, venue } = item;
    const [isMounted, setIsMounted] = useState(false);
    
    useEffect(()=> {
        setIsMounted(true);
    }, []);
    return (
        <ListItem>
            <Transition
                timeout = {1500}
                in = {isMounted}
                addEndListener = {(node, done) => {
                    TweenMax.to(node, 1, {
                        autoAlpha:isMounted ? 1 : 0,
                        x:isMounted ? 0 : -100,
                        onComplete:done,
                        delay:isMounted ? index * 0.15 : 0
                    });
                }}>
                <ListItemInner index={index} style={{ backgroundImage: `url(${image_url})` }}>
                    <Content>
                        <Date>{event_date}</Date>
                        <BottomContent>
                            <ArtistTitle>{name}</ArtistTitle>
                            <ArtistVenue>{venue}</ArtistVenue>
                            <ArtistLocation>{location}</ArtistLocation>
                        </BottomContent>
                        <SeeMoreBtn>
                            <div>
                                <span>See More</span>
                            </div>
                        </SeeMoreBtn>
                    </Content>
                </ListItemInner>
            </Transition>

        </ListItem>
    );
};

export default AristItemWithPic;

