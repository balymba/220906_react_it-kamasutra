import React from "react";
import style from './Nav.module.css';
import { NavLink } from 'react-router-dom';
import BestFriends from "./BestFriends/BestFriends";

const Nav = () => {
    debugger
    return (
        <nav className={style.nav}>
            <div className={style.item}> <NavLink to='/dialogs'>Dialogs</NavLink> </div>
            <div className={style.item}> <NavLink to='/profile'>Profile</NavLink> </div>

            <div> 
                {/* <BestFriends state={props.state}/>  */}
            </div>
        </nav>
    )
}

export default Nav;