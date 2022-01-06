export const sortSubreddits = subreddits => {
    const sorted = subreddits.data.children.sort((a, b) => {
        if(a.data.subscribers > b.data.subscribers) return 1;
        if(a.data.subscribers < b.data.subscribers) return -1;
        return 0;
    })
    return sorted

}