import React from 'react';
import style from './NavBar.module.css'


export default function NavBar() {
    return (
        <div className={style.navcontainer}>
            <div className={style.logoContainer}>
                <img src="BlueReddit.png" alt="logo" className={style.logoImage} />
                <span className={style.logoTextStart}>Reddit</span>
                <span className={style.logoTextEnd}>minimal</span>
            </div>
            <div className={style.searchContainer}>
                <input type="text" placeholder="Search Reddit" className={style.searchBar} />
                <img src="magnifying-glass-solid.svg" alt="Submit search" className={style.searchIcon} />
            </div>
        </div>
    )
}