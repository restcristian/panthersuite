import React from 'react';
import SectionTop from './SectionTop/SectionTop';
import SectionSpotlight from './SectionSpotlight/SectionSpotlight';
import SectionEvents from './SectionEvents/SectionEvents';
import SectionNewsletter from './SectionNewsletter/SectionNewsletter';

const Home = () => {
    return (
        <React.Fragment>
            <SectionTop />
            <SectionSpotlight />
            <SectionEvents />
            <SectionNewsletter />
        </React.Fragment>
    );
};

export default Home;