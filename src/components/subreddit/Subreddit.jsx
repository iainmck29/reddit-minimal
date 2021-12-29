import React from "react";
import style from "./Subreddit.module.css"

export default function Subreddit() {
    return (
        <div className={style.container}>
            <img src="BlueReddit.png" alt="subreddit avatar" />
            <h3>Subreddit</h3>
        </div>
    )
}