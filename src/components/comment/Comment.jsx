import React, { useState } from "react";
import style from './Comment.module.css'
import cx from 'classnames'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function Comment(props) {
    const [showingComments, setShowingComments] = useState(false);

    const onToggleReplies = () => {
        if (showingComments) {
            setShowingComments(false)
         } else setShowingComments(true)
    }

    return (
        <div className={style.commentContainer}>
            <p className={style.author}>{props.comment.data.author}</p>
            <p className={style.comment}>{props.comment.data.body}</p>
            {props.comment.data.replies && <FontAwesomeIcon icon={faAngleDown} onClick={onToggleReplies} className={showingComments ? style.hideComments : style.showComments}/>}
            {props.comment.data.replies && props.comment.data.replies.data.children.map(reply => {
                return (<div key={reply.data.id} className={ cx(style.reply, showingComments ? '' : style.hide) }>
                    <Comment comment={reply} reply={true}/>
                </div>)
                }) 
            }
        </div>
    )
}