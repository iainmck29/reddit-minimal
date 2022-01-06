import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSubreddits } from "../../api/reddit";

export const loadSubreddits = createAsyncThunk('subreddits/getTopSubreddits',
async (arg, thunkAPI) => {
    const payload = await getSubreddits();
    return payload;
})

export const subredditsSlice = createSlice({
    name: 'subreddits',
    initialState: {
        subreddits: [],
        activeSubreddit: 'r/Home',
        isLoading: false,
        hasError: false
    },
    reducers: {
        changeSubreddit: (state, action) => {
            state.activeSubreddit = action.payload
        }
    },
    extraReducers: {
        [loadSubreddits.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadSubreddits.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.hasError = false;
            state.subreddits = action.payload;
        },
        [loadSubreddits.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
})

export const selectSubreddits = state => {
    return state.subreddits.subreddits
}

export const selectLoadingSubreddits = state => {
    return state.subreddits.isLoading;
}

export const selectErrorLoadingSubreddits = state => {
    return state.subreddits.hasError;
}

export const selectActiveSubreddit = state => {
    return state.subreddits.activeSubreddit
}

export const { changeSubreddit } = subredditsSlice.actions
export default subredditsSlice.reducer;