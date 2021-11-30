import axios from "axios";

import { tokenHeader } from "../headersauth";

import {  ADD_DATA } from "./types";



export const addDATAS = (project) => (dispatch, getState) => {
  axios
    .post(`${process.env.REACT_APP_API_URL}/api/project/`, project, tokenHeader(getState))
    .then((res) => {
      
      dispatch({
        type: ADD_DATA,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
}