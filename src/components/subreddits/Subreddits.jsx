import React from "react";
import Subreddit from "../subreddit/Subreddit";
import style from './Subreddits.module.css'
import { useSelector, useDispatch } from "react-redux";
import { changeSubreddit, selectLoadingSubreddits, selectSubreddits, selectErrorLoadingSubreddits } from "./subredditsSlice";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


export default function Subreddits(props) {
    const subreddits = useSelector(selectSubreddits);
    const isLoading = useSelector(selectLoadingSubreddits);
    const hasError = useSelector(selectErrorLoadingSubreddits)
    const dispatch = useDispatch();

    const onChangeSubreddit = (subreddit) => {
        props.changeSubredditState(subreddit)
        dispatch(changeSubreddit(subreddit))
    }

    if (hasError) {
        return (
            <p>Error Loading Subreddits</p>
        )
    }

    if (isLoading) {
        return (
            <Skeleton count={5}/>
        )
    }

    return (
        <aside className={style.subreddit}>
            <h2>Subreddits</h2>
            {subreddits.map(subreddit => {
                return <Subreddit key={subreddit.data.id} subreddit={subreddit} changeSubreddit={onChangeSubreddit} active={props.active}/>
            })}
        </aside>
    )

}