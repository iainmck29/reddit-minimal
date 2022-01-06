// import { getComments } from "../../api/reddit";
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const loadComments = createAsyncThunk('comments/getCommentsForPost',
// async (postIdentifierObject, thunkAPI) => {
//     const comments = await getComments();
//     return comments;
// })

// export const commentsSlice = createSlice({
//     name: 'comments',
//     initialState: {
//         comments: [],
//         isLoading: false,
//         hasError: false
//     },
//     reducers: {},
//     extraReducers: {
//         [loadComments.pending]: (state, action) => {
//             state.isLoading = true;
//             state.hasError = false;
//         },
//         [loadComments.fulfilled]: (state, action) => {
//             state.isLoading = false;
//             state.hasError = false;
//             state.comments = action.payload
//         },
//         [loadComments.rejected]: (state, action) => {
//             state.isLoading = false;
//             state.hasError = true;
//         }
//     }
// })

// export const selectComments = state => {
//     return state.comments.comments
// }

// export default commentsSlice.reducer