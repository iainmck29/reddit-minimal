import React, { useEffect, useState } from 'react'
import style from './App.module.css'
import NavBar from './components/nav/NavBar';
import Post from './components/posts/Post';
import Subreddits from './components/subreddits/Subreddits';
import { useDispatch, useSelector } from 'react-redux';
import { loadPosts, selectPosts } from './components/posts/postsSlice'
import { loadSubreddits, selectActiveSubreddit } from './components/subreddits/subredditsSlice';

function App() {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts)
  const activeSubreddit = useSelector(selectActiveSubreddit)
  const [active, setActive] = useState('r/Home')

  useEffect(() => {
    dispatch(loadPosts(activeSubreddit));
    dispatch(loadSubreddits())
  }, [dispatch, activeSubreddit])

  const onChangeSubredditState = (subreddit) => {
    setActive(subreddit);
  }


  return (
    <div>

      <NavBar />
      <div className={style.appContainer}>
        <main>
          {posts.map(post => {
            return <Post post={post} key={post.data.id} />
          })}
        </main>

        <Subreddits active={active} changeSubredditState={onChangeSubredditState}/>

      </div>
    </div>
  );
}

export default App;
