import { configureStore } from "@reduxjs/toolkit";
import postsSliceReducer from "../components/posts/postsSlice";
import subredditsSliceReducer from "../components/subreddits/subredditsSlice";

export default configureStore({
    reducer: {
        posts: postsSliceReducer,
        subreddits: subredditsSliceReducer
    }
})