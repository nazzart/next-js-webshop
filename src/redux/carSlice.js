"use client"

import { createSlice } from  "@reduxjs/toolkit";

const initialState = {
    selectedCar: [],
    location: "",
    duration: "",
    equipment: []
};

const slice = createSlice({
    name: "car",
    initialState,
    reducers: {
        setSelectedCar(state, action) {
            state.selectedCar = action.payload;
        }
    }
});

export default slice.reducer; 

// Actions
export const { setSelectedCar, setUser, setToken } = slice.actions;
