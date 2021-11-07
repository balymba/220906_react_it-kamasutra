import React from "react";
import h from './Header.module.css';
import logo from '../../Images/logo.png'

const Header = () => {
    return (
        <header className={h.header}>
            <img src={logo} alt='test'></img>
        </header>
    )
}

export default Header;