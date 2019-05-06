import React, { useState } from 'react';
import {
    NavBarContainer,
    Wrapper,
    LogoContainer,
    LinksList,
    RightPanel
} from './styles';
import {
    Row
} from '../shared/styles';
import { useWindowsWidth } from '../shared/hooks/hooks';
import SearchButton from '../SearchButton/SearchButton';
import ToggleButton from './ToggleButton/ToggleButon';
import Logo from '../../assets/imgs/logo-white.svg';
import { toggleSearch } from '../../store/actions/navBarActions';
import SearchModal from '../SearchModal/SearchModal';
import { connect } from 'react-redux';

const NavBar = (props) => {

    const windowsWidth = useWindowsWidth();
    const [menuStatus, setMenuStatus] = useState(false);

    const MOBILE_BREAKPOINT = 1023;
    let LinkListsClasses = [];
    let toggleMenuBtn = null;

    if (windowsWidth <= MOBILE_BREAKPOINT) {
        LinkListsClasses.push('isMobile');
        toggleMenuBtn = (
            <ToggleButton
                isOpen={menuStatus}
                onClick={() => setMenuStatus(!menuStatus)}
            />
        );
        if (menuStatus) {
            LinkListsClasses.push('isOpen');
        }
    }
    return (
        <React.Fragment>
            <NavBarContainer>
                <Row>
                    <Wrapper>
                        <LogoContainer>
                            <img src={Logo} alt="Logo" />
                        </LogoContainer>
                        <RightPanel>
                            <LinksList className={LinkListsClasses.join(' ')}>
                                <li>
                                    <a href="/">Concerts</a>
                                </li>
                                <li>
                                    <a href="/">About us</a>
                                </li>
                                <li>
                                    <a href="/">Contact</a>
                                </li>
                            </LinksList>
                            {toggleMenuBtn}
                            <SearchButton
                                onClick={() => props.toggleSearch()} />
                        </RightPanel>
                    </Wrapper>
                </Row>
            </NavBarContainer>
            <SearchModal />
        </React.Fragment>
    );
}

const mapStatetoProps = state => {
    return {
        isSearchOpen: state.navBar.isSearchOpen
    }
};

export default connect(mapStatetoProps, { toggleSearch })(NavBar);