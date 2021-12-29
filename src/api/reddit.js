export const getReddits = async (subreddit) => {
    const url = `https://www.reddit.com/r/popular/top.json?limit=1&t=day`;
    const reddit = await fetch(url);
    const redditJSON = await reddit.json()
    return redditJSON;
}