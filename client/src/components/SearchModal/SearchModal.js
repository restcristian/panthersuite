import React from 'react';
import {
    ModalContainer,
    ModalWrapper,
    Form,
    CloseButton,
    SubmitButton,
    InputText
} from './styles';
import { connect } from 'react-redux';
import { toggleSearch } from '../../store/actions/navBarActions';
import { CSSTransition } from 'react-transition-group';
import Portal from '../Portal/Portal';
import './animations.css';

const SearchModal = props => {

    const onModalClickHandler = () => {
        props.toggleSearch();
    };

    const children = (
        <Portal rootSelector="#searchRoot">
            <CSSTransition
                in={props.isSearchOpen}
                timeout={400}
                unmountOnExit
                classNames="search-modal">
                <ModalContainer onClick={onModalClickHandler}>
                    <ModalWrapper onClick={e => e.stopPropagation()}>
                        <CloseButton onClick={onModalClickHandler}>X</CloseButton>
                        <Form>
                            <InputText placeholder="Search String" />
                            <SubmitButton type="submit">Go</SubmitButton>
                        </Form>
                    </ModalWrapper>
                </ModalContainer>
            </CSSTransition>
        </Portal>
    );
    return children;

};

SearchModal.defaultProps = {
    isSearchOpen: false
};

const mapStateToProps = state => {
    return {
        isSearchOpen: state.navBar.isSearchOpen
    };
};
export default connect(mapStateToProps, { toggleSearch })(SearchModal);