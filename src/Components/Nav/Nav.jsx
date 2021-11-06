import React from "react";
import N from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={N.nav}>
            <div className={N.item}> <a href='/profile' alt='test'>Profile</a> </div>
            <div className={N.item}> <a href='/dialogs' alt='test'>Messages</a> </div>
            <div className={N.item}> <a href='/news' alt='test'>News</a> </div>
            <div className={N.item}> <a href='/music' alt='test'>Music</a> </div>
            <div className={N.item}> <a href='/settings' alt='test'>Settings</a> </div>
        </nav>
    )
}

export default Nav;