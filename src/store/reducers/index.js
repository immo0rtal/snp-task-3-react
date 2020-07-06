import { combineReducers } from "@reduxjs/toolkit";
import phoneBookReducer from "./phonebook.js";

export const rootLevelReducer = combineReducers({
  phonebook: phoneBookReducer,
});
