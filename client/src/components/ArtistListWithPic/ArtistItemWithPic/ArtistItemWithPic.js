import React from 'react';
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
    return (
        <ListItem>
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
        </ListItem>
    );
};

export default AristItemWithPic;

