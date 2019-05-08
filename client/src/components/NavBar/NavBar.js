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
import {Link} from 'react-router-dom';

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
                            <Link to = "/">
                                <img src={Logo} alt="Logo" />
                            </Link>
                        </LogoContainer>
                        <RightPanel>
                            <LinksList className={LinkListsClasses.join(' ')}>
                                <li>
                                    <Link to = "/concerts">Concerts</Link>
                                </li>
                                <li>
                                    <Link to="/">About us</Link>
                                </li>
                                <li>
                                    <Link to="/">Contact</Link>
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