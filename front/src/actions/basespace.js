import axios from "axios";

import { GET_ANALYSIS, GET_BIOSAMPLE, GET_PROJECT } from "./types";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

toast.configure();

export const getAnalysis = () => async (dispatch) => {
  const res = await axios.get("http://localhost:8000/api/analysis/");

  dispatch({
    type: GET_ANALYSIS,
    payload: res.data,
  });
};

export const getBiosample = () => async (dispatch) => {
  const res = await axios.get("http://localhost:8000/api/biosample/");

  dispatch({
    type: GET_BIOSAMPLE,
    payload: res.data,
  });
};

export const getProject = () => async (dispatch) => {
  const res = await axios.get("http://localhost:8000/api/projects/");

  dispatch({
    type: GET_PROJECT,
    payload: res.data,
  });
};
