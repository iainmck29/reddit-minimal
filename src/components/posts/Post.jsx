import React from "react";
import style from './Post.module.css'
import cx from 'classnames'
import Vote from "../voter/Vote";
import Comments from '../comments/Comments';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'



export default function Post(props) {

    return (
        <div className={ cx(style.card, style.reddit) }>
            <Vote ups={props.post.data.ups}/>
            <div className={style.container}>
                <h2>{props.post.data.title || <Skeleton />}</h2>
                <p>{props.post.data.selftext}</p>
                <img src={props.post.data.url || <Skeleton />} alt="" />
                <Comments post={props.post}/>
            </div>
        </div>
    )
}