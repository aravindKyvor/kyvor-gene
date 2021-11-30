import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './auth';
import pipes from './pipes';
export default combineReducers({
  
    auth,
    pipes
  
});
