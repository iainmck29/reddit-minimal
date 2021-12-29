import React from 'react'
import style from './App.module.css'
import NavBar from './components/nav/NavBar';
import Card from './components/card/Card';
import { getReddits } from './api/reddit'

function App() {

  return (
    <div>

      <NavBar />
      <div className={style.appContainer}>
        <main>
            <Card cardType='reddit' />
        </main>

        <Card cardType='subreddit' />

      </div>
    </div>
  );
}

export default App;
