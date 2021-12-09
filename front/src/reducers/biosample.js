import {

   POST_BIOSAMPLE,POST_BIOSAMPLE_ERROR,EDIT_BIOAMPLE
  
  } from "../actions/types";
  
  const initialState = {
    projects: [],
    error:null
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      
      case POST_BIOSAMPLE:
        return {
          ...state,
          projects: [...state.projects, action.payload],
        };
        case POST_BIOSAMPLE_ERROR:
            return{
                projects:[],
                error:action.payload
            }

      
      default:
        return state;
    }
  }