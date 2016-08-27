import { combineReducers } from 'redux';
import counter from './../counter/counterState';
import todoList from './../todo-list/todoListState';

// Combine every reducer to represent the global state of the app
export default combineReducers({
  counter,
  todoList,
});
