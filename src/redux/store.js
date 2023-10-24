"use client";

import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import thunk from 'redux-thunk';

import configuratorReducer from './configuratorSlice';

const reducers = combineReducers({
  configurator: configuratorReducer,
});

const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};

const storage = typeof window !== "undefined" ? createWebStorage("local") : createNoopStorage();

const persistConfig = {
  timeout: 100, //Set the timeout function to 2 seconds
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);


const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export default store;