import {

  ADD_DATA,

} from "../actions/types";

const initialState = {
  projects: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    
    case ADD_DATA:
      return {
        ...state,
        projects: [...state.projects, action.payload],
      };
   
    default:
      return state;
  }
}