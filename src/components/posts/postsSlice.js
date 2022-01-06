import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getPosts, searchReddit } from '../../api/reddit'

export const loadPosts = createAsyncThunk('posts/getAllPosts',
    async (subreddit, thunkAPI) => {
        const payload = await getPosts(subreddit);
        return payload.data.children
})

export const loadSearchResults = createAsyncThunk('posts/searchPosts',
    async (searchTerm, thunkAPI) => {
        const payload = await searchReddit(searchTerm);
        console.log(payload)
        return payload.data.children
    })

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        isLoading: false,
        hasError: false
    },
    reducers: {},
    extraReducers: {
        [loadPosts.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadPosts.fulfilled]: (state, action) => {
            state.posts = action.payload;
            state.isLoading = false;
            state.hasError = false;
        },
        [loadPosts.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        },
        [loadSearchResults.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadSearchResults.fulfilled]: (state, action) => {
            state.posts = action.payload;
            state.isLoading = false;
            state.hasError = false;
        },
        [loadSearchResults.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        }

    }
})

export const selectLoadingPosts = state => {
    return state.posts.isLoading
}

export const selectErrorLoadingPosts = state => {
    return state.posts.hasError;
}

export const selectPosts = (state) => {
    return state.posts.posts
}


export default postsSlice.reducer;