import React from 'react';

const Facebook = props => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="12" height="24" viewBox="0 0 12 24">
            <defs>
                <path id="facebookA" d="M0 0h11.935v23.867H0z" />
            </defs>
            <g fill="none" fillRule="evenodd">
                <mask id="facebookB" fill="#fff">
                    <use xlinkHref="#facebookA" />
                </mask>
                <path fill="#FFF" d="M7.747 23.867V12.981h3.518l.527-4.244H7.747V6.028c0-1.228.327-2.065 2.025-2.065l2.163-.001V.166C11.56.116 10.277 0 8.783 0c-3.12 0-5.255 1.977-5.255 5.608v3.13H0v4.243h3.528v10.886h4.22z" mask="url(#facebookB)" />
            </g>
        </svg>
    );
};

export default Facebook;