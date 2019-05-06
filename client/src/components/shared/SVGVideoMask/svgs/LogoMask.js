import React from 'react';

const LogoMask = props => {
    
    return(
        <svg 
            version="1.1"
            width="413" 
            height="521" 
            xmlns="http://www.w3.org/2000/svg" 
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px" y="0px" 
            viewBox="0 0 413 521" 
            preserveAspectRatio="xMidYMid slice" 
            >
        <defs>
            <mask id={props.maskId || "mask"} x="0" y="0" width="100%" height="100%">
                <rect x="0" y="0" width="100%" height="100%"></rect>
                <path className="st4" d="M286.6,156.6c0,0,5.3,13.5,29,13.5C315.6,170.2,320.8,140.8,286.6,156.6z"></path>
                <path className="st4" d="M379.6,3.5c-1.2,0.3-2.4,0.6-3.7,0.9c-12.1,3.1-24.2,6.2-36.3,9.3c-19.6,5-39.3,10.1-58.9,15.1
                c-20.4,5.2-40.8,10.5-61.2,15.7c-14.4,3.7-28.8,7.4-43.2,11.1c-10.3,2.6-21.3,3.1-29.4,10.7c-6.7,6.3-9.3,15.1-9.7,24.1
                c0,0.3-0.1,0.5-0.1,0.8V93v53.4v38.9v153.9C122.7,350.4,101.8,354,86,355c-0.2,0-0.3,0-0.4,0c-2.2,0-4.3,0.2-6.4,0.3
                c-5.1,0.4-10,1.3-14.8,2.6C29.5,367.3,3.8,399,3.8,436.8c0,45.2,36.6,81.8,81.8,81.8c28.4,0,53.4-14.5,68.1-36.5
                c8.6-13,13.7-28.5,13.7-45.3c0-22.1,0-44.3,0-66.4c0-36.1,0-72.2,0-108.3c0-28.4,4.9-57.4,15.3-84.1c1.6-4.2,9.8-18.4,6.5-22.5
                c-5.3-6.6-7.5-16.7-5.8-27.6c1.4-9,4.8-15.1,7.1-17.4l25.1,12.2c2.7,1.3,7.3,6.9,7.5,7.2c16.3,4.5,30.5,4.2,30.5,4.2l35.6-2.8
                c16.7-1.3,33,6.5,42.4,20.4c4.1,6.1,6.8,10.6,6.9,10.7c2.1,3.5,5.6,5.9,9.5,6.6c0.1,0,0.2,0.1,0.3,0.1
                c5.6,1.9,22.1,10.3,31.2,15.7v45.1c-5.4,15.7-20.3,27-37.7,27h-29.5c-6.6,0-12.2,4.7-13.4,11.1l-7.4,38.9
                c-0.1,0.8-0.2,1.6-0.2,2.3c-26.7,13.4-45.1,41-45.1,72.9c0,45.2,36.6,81.8,81.8,81.8c28.4,0,53.4-14.5,68.1-36.5
                c8.6-13,13.7-28.5,13.7-45.3V130.8v-94v-3C409.9,17.1,396.2,3.5,379.6,3.5z"></path>
            </mask>
        </defs>
            <rect x="0" y="0" width="100%" height="100%"></rect>
        </svg>
    );
};

export default LogoMask;