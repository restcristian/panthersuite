import React from 'react';
import { ToggleBtn } from './styles';

const ToggleButton = props => {
    return (
        <ToggleBtn
            className={`${props.isOpen ? 'isOpen' : ''}`}
            onClick={props.onClick}>
            Toggle
            <div className="stick"></div>
            <div className="stick"></div>
            <div className="stick"></div>
        </ToggleBtn>
    );
};

ToggleButton.defaultProps = {
    isOpen: false
};
export default ToggleButton;