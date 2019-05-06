import React from 'react';
import {
    HeaderStyled
} from './styles';

const Header = props => {
    return (
        <HeaderStyled>
            {props.children}
        </HeaderStyled>
    );
}

export default Header;