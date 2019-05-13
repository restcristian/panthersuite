import React, { useEffect, useRef } from 'react';
import {
    List
} from './styles';
import ArtistItemWithPic from './ArtistItemWithPic/ArtistItemWithPic';
import Masonry from 'masonry-layout';

const ArtistListWithPic = ({ items }) => {
    const listEl = useRef(null);

    useEffect(() => {
       let msry =  new Masonry(listEl.current);
        return () => {
            msry.destroy();
        }
    }, [items]);

    const renderItems = () => {
        return items.map((item, idx) => {
            return (
                <ArtistItemWithPic
                    key={item._id}
                    index={idx}
                    item={item}
                />
            )
        });
    };

    return (
        <List ref={listEl}>
            {renderItems()}
        </List>
    );

};

export default ArtistListWithPic;

