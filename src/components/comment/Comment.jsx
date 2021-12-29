import React from "react";
import style from './Comment.module.css'

export default function Comment(props) {
    return (
        <div className={style.commentContainer}>
            <p className={style.author}>Author</p>
            <p className={style.comment}>This is a comment</p>
        </div>
    )
}