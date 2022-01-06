import React from "react";
import style from './Vote.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function Vote(props) {
    return (
        <div className={style.voteContainer}>
            <FontAwesomeIcon icon={faArrowUp} className={style.icon}/>
            <p>{props.ups}</p>
            <FontAwesomeIcon icon={faArrowDown} className={style.icon}/>
        </div>
    )
}