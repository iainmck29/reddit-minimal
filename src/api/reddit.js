import { sortSubreddits } from "../utils/sortReddits";

export const getPosts = async (subreddit) => {
    const url = `https://www.reddit.com/${subreddit}/top.json?limit=5&t=day`;
    const reddit = await fetch(url);
    const redditJSON = await reddit.json()
    return redditJSON;
}

export const getComments = async (permalink) => {
    const url = `https://www.reddit.com/${permalink}.json`
    const comments = await fetch(url);
    const commentsJSON = await comments.json();
    return commentsJSON[1].data.children;
}

export const getSubreddits = async () => {
    const url = `https://www.reddit.com/reddits.json`
    const subreddits = await fetch(url);
    const subredditsJSON = await subreddits.json();
    const sortedSubreddits = sortSubreddits(subredditsJSON)
    return sortedSubreddits
}

export const searchReddit = async (searchTerm) => {
    const url = `http://www.reddit.com/search.json?q=${searchTerm}&sort=top&t=day`
    const posts = await fetch(url);
    const postsJSON = await posts.json();
    return postsJSON;
}
