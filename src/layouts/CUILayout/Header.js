import React from 'react';
//import {Link} from 'react-router';
import {Navbar} from 'react-bootstrap';
import logo from './logo.png'

const Header = ({logoStyle}) => {
    return (
        <header>
            <Navbar collapseOnSelect fixedTop fluid>
                <Navbar.Header >
                    <a href="/"><span><img src={ logo } role="presentation" width="500px" /></span></a>
                </Navbar.Header>
            </Navbar>
        </header>
     );
} 

export default Header;