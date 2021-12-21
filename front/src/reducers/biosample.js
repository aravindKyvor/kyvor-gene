import { GET_BIOSAMPLE } from "../actions/types";

const initialState = {
  biosample: [],
  
};

export default function (state=initialState, action) {
  switch (action.type) {
    case GET_BIOSAMPLE:
      return {
        ...state,
        biosample: action.payload,
      };

   

    default:
      return state;
  }
}
