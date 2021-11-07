import React from "react";
import style from './Nav.module.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className={style.nav}>
            {/* <div className={N.item}> <a href='/profile' alt='test'>Profile</a> </div>
            <div className={N.item}> <a href='/dialogs' alt='test'>Messages</a> </div>
            <div className={N.item}> <a href='/news' alt='test'>News</a> </div>
            <div className={N.item}> <a href='/music' alt='test'>Music</a> </div>
            <div className={N.item}> <a href='/settings' alt='test'>Settings</a> </div> */}
            <div className={style.item}> <NavLink activeClassName={style.active} to='/dialogs' onlyActiveOnIndex>Dialogs</NavLink> </div>
            <div className={style.item}> <NavLink activeClassName={style.active} to='/profile' onlyActiveOnIndex>Profile</NavLink> </div>
        </nav>
    )
}

export default Nav;