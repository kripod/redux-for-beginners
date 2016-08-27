import { createAction, handleActions } from 'redux-actions';

// Define the initial state of the state container
const initialState = { items: [] };

let nextTodoId = 0;

// Define actions and export their creators to make them dispatchable with ease
export const addTodo = createAction('todoList/ADD_TODO', (text) => ({
  id: nextTodoId++,
  text,
  isCompleted: false,
}));
export const removeTodo = createAction('todoList/REMOVE_TODO');
export const toggleTodo = createAction('todoList/TOGGLE_TODO');

// Handle every dispatchable action by returning a new immutable state
export default handleActions({
  [addTodo]: (state, { payload: todo }) => ({
    ...state,
    items: [...state.items, todo],
  }),

  [removeTodo]: (state, { payload: id }) => ({
    ...state,
    items: state.items.filter((todo) => todo.id !== id),
  }),

  [toggleTodo]: (state, { payload: id }) => ({
    ...state,
    items: state.items.map((todo) =>
      todo.id !== id ? todo : {
        ...todo,
        isCompleted: !todo.isCompleted,
      }
    ),
  }),
}, initialState);
