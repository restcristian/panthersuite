import React from 'react';
import { ButtonBase } from '../shared/styles';
const SearchButton = (props) => {
    return (
            <ButtonBase
                onClick = {props.onClick}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="20" height="21" viewBox="0 0 20 21">
                    <defs>
                        <path id="searchA" d="M0 0h20v20.663H0z" />
                    </defs>
                    <g fill="none" fillRule="evenodd">
                        <mask id="searchB" fill="#fff">
                            <use xlinkHref="#searchA" />
                        </mask>
                        <path fill="#FFF" d="M8.364 14.51c-3.41 0-6.182-2.767-6.182-6.167s2.773-6.167 6.182-6.167c3.409 0 6.181 2.767 6.181 6.167s-2.772 6.166-6.181 6.166m11.332 4.312l-4.93-5.115a8.303 8.303 0 0 0 1.961-5.363c0-4.6-3.752-8.343-8.363-8.343C3.752 0 0 3.743 0 8.343s3.752 8.342 8.364 8.342c1.73 0 3.38-.52 4.791-1.51l4.968 5.154c.208.216.487.334.786.334a1.087 1.087 0 0 0 .787-1.842" mask="url(#searchB)" />
                    </g>
                </svg>
            </ButtonBase>
    );
};

export default SearchButton;