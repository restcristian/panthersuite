import React from 'react';

const TextMask = props => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 285 80"
            preserveAspectRatio="xMidYMid slice">
            <defs>
                <mask id={props.maskId} x="0" y="0" width="100%" height="100%" >
                    <rect x="0" y="0" width="100%" height="100%" />
                    {/* Include text tags in here */}
                    {props.text}
                </mask>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" />
        </svg>
    );
};

export default TextMask;