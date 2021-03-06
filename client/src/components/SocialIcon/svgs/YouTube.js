import React from 'react';

const YouTube = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="34" height="24" viewBox="0 0 34 24">
            <defs>
                <path id="youtubeA" d="M0 0h34v23.909H0z" />
            </defs>
            <g fill="none" fillRule="evenodd">
                <mask id="youtubeB" fill="#fff">
                    <use xlinkHref="#youtubeA" />
                </mask>
                <path fill="#FFF" d="M21.828 12.766l-7.133 3.725a1.096 1.096 0 0 1-1.605-.97V8.093a1.095 1.095 0 0 1 1.602-.973l7.134 3.701a1.096 1.096 0 0 1 .002 1.944M32.675 2.052C31.447.595 29.182 0 24.855 0H9.144C4.72 0 2.416.633 1.193 2.185 0 3.698 0 5.928 0 9.014v5.881c0 5.978 1.414 9.014 9.146 9.014h15.708c3.753 0 5.832-.525 7.178-1.812C33.412 20.778 34 18.624 34 14.895V9.014c0-3.255-.092-5.497-1.325-6.962" mask="url(#youtubeB)" />
            </g>
        </svg>

    );
};

export default YouTube;