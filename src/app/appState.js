import { combineReducers } from 'redux';
import counter from './../counter/counterState';

// Combine every reducer to represent the global state of the app
export default combineReducers({
  counter,
});
