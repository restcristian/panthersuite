import React from 'react';
import SectionTop from './SectionTop/SectionTop';
import SectionEvents from './SectionEvents/SectionEvents';

const Concerts = props =>  {
    return (
        <React.Fragment>
            <SectionTop />
            <SectionEvents />
        </React.Fragment>
    );
};

export default Concerts;
