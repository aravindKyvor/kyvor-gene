import axios from "axios";

import { tokenHeader } from "../headersauth";

import { POST_BASESPACE,POST_BIOSAMPLE } from "./types";

export const addBasespace = (project) => (dispatch, getState) => {
  axios
    .post(
      `${process.env.REACT_APP_API_URL}/api/project/`,
      project,
      tokenHeader(getState)
    )
    .then((res) => {
      dispatch({
        type: POST_BASESPACE,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};


export const addBiosample = (project) => (dispatch, getState) => {
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/biosample/`,
        project,
        tokenHeader(getState)
      )
      .then((res) => {
        dispatch({
          type: POST_BIOSAMPLE,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
  
  