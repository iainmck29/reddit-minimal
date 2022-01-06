import React, { useState, useEffect } from "react";
import style from './Comments.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import Comment from "../comment/Comment";
import moment from 'moment'
import { getComments } from "../../api/reddit";

export default function Comments(props) {
    const [showingComments, setShowingComments] = useState(false)
    const [commentsLocal, setCommentsLocal] = useState([])
    
    useEffect(() => {
        // Start here. Work out how to do an async function to get the comments then set them in local state.
        async function fetchComments() {
            const commentsFromApi = await getComments(props.post.data.permalink)
            setCommentsLocal(commentsFromApi)
        }
        fetchComments();
     }, [])

    const onToggleComments = () => {
        if (showingComments) {
            setShowingComments(false);
        } else {
            setShowingComments(true);
        }
    }
    return (
        <div className={style.container}>
        <div className={style.footer}>
            <p className={style.gray}>{moment.unix(props.post.data.created_utc).fromNow()}</p>
            <div className={style.postedBy}>
            <p className={style.gray}>Posted by</p>
            <p className={style.highlighted}>{props.post.data.author}</p>
            </div>
            <FontAwesomeIcon icon={faComment} className={style.icon} onClick={() => onToggleComments()}/>
        </div>
        <div className={showingComments ? '' : style.hide}>
            {commentsLocal.map(comment => {
                return (
                    <div className={style.commentContainer} key={comment.data.id}>
                        <Comment comment={comment}/>
                    </div>
                )
            })}

        </div>
        </div>
    )
}