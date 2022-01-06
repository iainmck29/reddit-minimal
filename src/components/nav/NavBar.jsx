import React, { useState } from 'react';
import style from './NavBar.module.css'
import { useDispatch } from 'react-redux';
import { loadSearchResults } from '../posts/postsSlice';


export default function NavBar(props) {
    const [searchValue, setSearchValue] = useState('');
    const dispatch = useDispatch();


    const onChangeSearch = (e) => {
        setSearchValue(e.target.value);
    }

    const onSubmitSearch = e => {
        e.preventDefault();
        dispatch(loadSearchResults(searchValue));
    }



    return (
        <div className={style.navcontainer}>
            <div className={style.logoContainer}>
                <img src="BlueReddit.png" alt="logo" className={style.logoImage} />
                <span className={style.logoTextStart}>Reddit</span>
                <span className={style.logoTextEnd}>minimal</span>
            </div>
            <div className={style.searchContainer}>
                <form onSubmit={onSubmitSearch}>
                <input type="text" placeholder="Search Reddit" className={style.searchBar} value={searchValue} onChange={onChangeSearch}/>
                <button type="submit" className={style.submitButton}>
                <img src="magnifying-glass-solid.svg" alt="Submit search" className={style.searchIcon}/>
                </button>
                </form>
            </div>
        </div>
    )
}