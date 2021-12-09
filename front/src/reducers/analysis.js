import {

    ADD_ANALYSIS
   
   } from "../actions/types";
   
   const initialState = {
     analysis: [],
    
   };
   
   export default function (state = initialState, action) {
     switch (action.type) {
       
       case ADD_ANALYSIS:
         return {
           ...state,
           analysis: [...state.analysis, action.payload],
         };
        
 
       
       default:
         return state;
     }
   }