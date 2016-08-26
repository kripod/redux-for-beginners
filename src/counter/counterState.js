import { createAction, handleActions } from 'redux-actions';

// Define the initial state of the state container
const initialState = { value: 0 };

// Define actions and export their creators to make them dispatchable with ease
export const incrementCounter = createAction('counter/INCREMENT');
export const decrementCounter = createAction('counter/DECREMENT');

// Handle every dispatchable action by returning a new immutable state
export default handleActions({
  [incrementCounter]: (state, { payload = 1 }) => ({
    value: state.value + payload
  }),

  [decrementCounter]: (state, { payload = 1 }) => ({
    value: state.value - payload
  }),
}, initialState);
