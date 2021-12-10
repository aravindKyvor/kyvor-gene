import axios from "axios";

import { tokenHeader } from "../headersauth";

import { POST_BASESPACE, POST_BIOSAMPLE,ADD_ANALYSIS} from "./types";
import {toast} from 'react-toastify';
 
import 'react-toastify/dist/ReactToastify.css';
 

toast.configure()


// projects
export const addBasespace = (project) => (dispatch, getState) => {

  axios
    .post(
      `${process.env.REACT_APP_API_URL}/api/projects/`,
      project,
      tokenHeader(getState)
    )
    .then((res) => {
    dispatch(
      toast.success('Your Project added succesfully',{
       position: "top-right",
      autoClose: 2000,

      }),
      
    )
      dispatch({
        type: POST_BASESPACE,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};





//Project ends


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


export const addAnalysis = (project) => (dispatch, getState) => {
  axios
    .post(
      `${process.env.REACT_APP_API_URL}/api/analysis/`,
      project,
      tokenHeader(getState)
    )
    .then((res) => {
      dispatch({
        type: ADD_ANALYSIS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};


