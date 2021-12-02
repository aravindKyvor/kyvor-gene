import axios from "axios";

import { tokenHeader } from "../headersauth";

import { GET_BASESPACE, ADD_DATA } from "./types";

export const addDATAS = (project) => (dispatch, getState) => {
  axios
    .post(
      `${process.env.REACT_APP_API_URL}/api/project/`,
      project,
      tokenHeader(getState)
    )
    .then((res) => {
      dispatch({
        type: ADD_DATA,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const GETDATAS = (project) => (dispatch, getState) => {
  axios
    .post(
      `${process.env.REACT_APP_API_URL}/api/`,
      project,
      tokenHeader(getState)
    )
    .then((res) => {
      dispatch({
        type: GET_BASESPACE,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
