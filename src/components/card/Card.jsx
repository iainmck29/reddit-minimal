import React from "react";
import style from './Card.module.css'
import cx from 'classnames'
import Vote from "../voter/Vote";
import Subreddit from "../subreddit/Subreddit";
import Comments from '../comments/Comments';

export default function Card(props) {
    if (props.cardType === 'reddit') {
        return (
            <div className={ cx(style.card, style[props.cardType]) }>
                <Vote />
                <div>
                    <h2>Lorem Ipsum</h2>
                    <img src="coffeebird.jpg" alt="coffeebird" />
                    <Comments />
                </div>
            </div>
    )
    } else if (props.cardType === 'subreddit') {
        return (
            <div className={cx(style.card, style.subreddit)}>
                <h2>Subreddits</h2>
                <Subreddit />
                <Subreddit />
                <Subreddit />
                <Subreddit />
            </div>
        )
    }
}