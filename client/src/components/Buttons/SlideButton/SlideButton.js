import React from 'react';

import {
    SlideButtonStyled
} from './styles';

const SlideButton = props =>  {
    return(
        <SlideButtonStyled 
                type = {props.type}
                slideColor = {props.slideColor} 
                onClick = {props.onClick}>
            <div>{props.children}</div>
        </SlideButtonStyled>
    )
};

export default SlideButton;