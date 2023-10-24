"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  car: {},
  location: "",
  duration: "",
  equipment: [],
};

const slice = createSlice({
  name: "car",
  initialState,
  reducers: {
    setCar(state, action) {
      state.car = action.payload;
    },
    setLocation(state, action) {
      state.location = action.payload;
    },
    setDuration(state, action) {
      state.duration = action.payload;
    },
    setEquipment(state, action) {
      state.equipment = action.payload;
    },
  },
});

export default slice.reducer;

// Actions
export const { setCar, setLocation, setDuration, setEquipment } = slice.actions;
