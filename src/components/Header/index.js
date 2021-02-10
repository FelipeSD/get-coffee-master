import React, { Component} from 'react';
import './Header.css';
import logo from '../../assets/img/logo.svg';

const Header = () => {
    return (
        <header id="header">
            <div id="logo">
                <img src={logo} />
            </div>
            <ul id="links-list">
                <li>
                    <a href="">menu</a>
                </li>
                <li>
                    <a href="">contact</a>
                </li>
                <li>
                    <a href="">find us</a>
                </li>
            </ul>
        </header>
    )
}

export default Header;