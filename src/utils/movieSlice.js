import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        tailerVideo: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTailerVideo: (state, action) => {
            state.tailerVideo = action.payload;
        }
    },
});
export const {addNowPlayingMovies, addTailerVideo} = movieSlice.actions;
export default movieSlice.reducer;