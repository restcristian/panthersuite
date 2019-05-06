import React from 'react';
import FaceBook from './svgs/FaceBook';
import Twitter from './svgs/Twitter';
import Instagram from './svgs/Instagram';
import YouTube from './svgs/YouTube';
import Email from './svgs/Email';


const SocialIcon = props => {
    const renderIcon = () => {
        switch (props.name) {
            case 'facebook':
                return <FaceBook />;
            case 'twitter':
                return <Twitter />;
            case 'instagram':
                return <Instagram />;
            case 'youtube':
                return <YouTube />;
            case 'email':
                return <Email />;
            default:
                return null;
        }
    }
    return renderIcon();
};

export default SocialIcon;