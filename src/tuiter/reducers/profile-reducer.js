import { createSlice } from "@reduxjs/toolkit";
import profileArray from "../data/profile.json";

const profileSlice = createSlice({
    name: "profile",
    initialState: profileArray,
    reducers: {
        updateProfile(state, action) {
            state.splice(0, 1);
            state.unshift({
                ...action.payload,
            })
        }
    }
});

export const { updateProfile } = profileSlice.actions;
export default profileSlice.reducer;
