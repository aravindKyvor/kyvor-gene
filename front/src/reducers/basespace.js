import {
  POST_BASESPACE,
 
} from "../actions/types";

const initialState = {
 
  projects: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case POST_BASESPACE:
      return { ...state, projects: action.payload };
 
    default:
      return state;
  }
}
