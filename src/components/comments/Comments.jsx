import React from "react";
import style from './Comments.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import Comment from "../comment/Comment";

export default function Comments(props) {
    const clicked = false
    return (
        <>
        <div className={style.footer}>
            <p className={style.gray}>2 hours ago</p>
            <div className={style.postedBy}>
            <p className={style.gray}>Posted by</p>
            <p className={style.highlighted}>Iain Mckenzie</p>
            </div>
            <FontAwesomeIcon icon={faComment} className={style.icon}/>
        </div>
        <div className={clicked ? '' : style.hide}>
            <Comment />
            <Comment />
            <Comment />
            <Comment />
        </div>
        </>
    )
}