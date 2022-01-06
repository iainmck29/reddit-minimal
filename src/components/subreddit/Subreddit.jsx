import React from "react";
import style from "./Subreddit.module.css"
import cx from "classnames"

export default function Subreddit(props) {
    if (props.active === props.subreddit.data.display_name_prefixed) {
        return (
            <div className={cx(style.activeContainer, style.container)} onClick={() => props.changeSubreddit(props.subreddit.data.display_name_prefixed)}>
                <img src={props.subreddit.data.icon_img ? props.subreddit.data.icon_img : 'BlueReddit.png'} alt="subreddit avatar" />
                <h3>{props.subreddit.data.title}</h3>
            </div>
        )
    }
    return (
        <div className={style.container} onClick={() => props.changeSubreddit(props.subreddit.data.display_name_prefixed)}>
            <img src={props.subreddit.data.icon_img ? props.subreddit.data.icon_img : 'BlueReddit.png'} alt="subreddit avatar" />
            <h3>{props.subreddit.data.title}</h3>
        </div>
    )
}