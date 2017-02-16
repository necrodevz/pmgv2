import React from 'react';
//import {Link} from 'react-router';
import {Navbar} from 'react-bootstrap';
import logo from './logo.png'

const Header = () => {
    return (
        <header>
            <Navbar collapseOnSelect fixedTop fluid>
                <Navbar.Header >
                    <a href="/"><span><img src={ logo } role="presentation" /></span></a>
                </Navbar.Header>
            </Navbar>
        </header>
     );
} 

export default Header;