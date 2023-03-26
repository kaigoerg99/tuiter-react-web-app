import { createSlice } from "@reduxjs/toolkit";
import stats from "../tuits/tuits.json";

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa-logo-web-rgb.png",
};

const templateTuit = {
    ...currentUser,
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}

const statSlice = createSlice({
    name: "stats",
    initialState: stats,
    reducers: {
        toggleLiked(state, action) {
            const tuit = state.find((tuit) =>
                tuit._id === action.payload._id)
            tuit.liked = !tuit.liked;
            tuit.liked ? tuit.likes += 1 : tuit.likes -= 1;
        },
        createTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        },
        deleteTuit(state, action) {
            const index = state
                .findIndex(tuit =>
                    tuit._id === action.payload);
            state.splice(index, 1);
        },
    }
});

export const {toggleLiked, createTuit, deleteTuit} = statSlice.actions;
export default statSlice.reducer;