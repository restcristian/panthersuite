import React from 'react';
import Header from './Header/Header';
import NavBar from '../NavBar/NavBar';
import Footer from './Footer/Footer';

const Layout = props => {
    return (
        <React.Fragment>
            <Header>
                <NavBar />
            </Header>
            <main>
                {props.children}
            </main>
            <footer>
                <Footer />
            </footer>
        </React.Fragment>
    )
};

export default Layout;