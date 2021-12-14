import axios from "axios";

import { tokenHeader } from "../headersauth";

import { POST_BASESPACE, POST_BIOSAMPLE, ADD_ANALYSIS } from "./types";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

toast.configure();

// projects
export const addBasespace = (project) => (dispatch) => {
  axios
    .post(`${process.env.REACT_APP_API_URL}/api/projects/`, project)
    .then((res) => {
     
      dispatch({
        type: POST_BASESPACE,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("Error", err);
      if (err) {
        toast.error("Your project was not added plz check the details", {
          position: "top-right",
          autoClose: 2000,
        });
      }
    });
};

//Project ends

export const addBiosample = (project) => (dispatch) => {
  
  axios
    .post(
      `${process.env.REACT_APP_API_URL}/api/biosample/`,
      project,
      
    )
    .then((res) => {
     
      
      dispatch({
      
        type: POST_BIOSAMPLE,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("Error", err);
      if (err) {
        toast.error("Biosamples was not added plz check the details", {
          position: "top-right",
          autoClose: 2000,
        });
      }
    });
};

export const addAnalysis = (project) => (dispatch) => {
  axios
    .post(
      `${process.env.REACT_APP_API_URL}/api/analysis/`,
      project,
    
    )
    .then((res) => {
    
      dispatch({
        type: ADD_ANALYSIS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("Error", err);
      if (err) {
        toast.error("Analysis was not added plz check the details", {
          position: "top-right",
          autoClose: 2000,
        });
      }
    });
  }