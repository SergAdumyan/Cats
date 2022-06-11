import axios from "axios";
import { useState } from "react";
import { combineReducers, legacy_createStore as createStore } from "redux";
import catsData from "./catsData"
const store = createStore(combineReducers({
    catsData:catsData
}),
{
  catsData:[]
})

export default store