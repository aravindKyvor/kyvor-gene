import { combineReducers } from 'redux';
import auth from './auth';
import biosample from './biosample';
import basespace from './basespace';
import analysis from './analysis';

export default combineReducers({
  
    auth,
   basespace,
   biosample,
   analysis,
 

  
});
