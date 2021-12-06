import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './auth';
import biosample from './biosample';
import basespace from './basespace';
export default combineReducers({
  
    auth,
   basespace,
   biosample

  
});
