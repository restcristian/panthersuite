import React from 'react';
import {
    ButtonContainer,
    ButtonInner
} from './styles';
const SquaredButton = props => {
    let classes = [];
    if (props.slide) {
        classes.push('slide');
    }
    return (
        <ButtonContainer
            className={classes.join(' ')}
            onClick={props.onClick}>
            <ButtonInner>{props.children}</ButtonInner>
        </ButtonContainer>
    );
};

export default SquaredButton;