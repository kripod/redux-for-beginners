import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { incrementCounter, decrementCounter } from './counterState';

// Define presentational component
export function Counter({ value, onIncrement, onDecrement }) {
  return (
    <div>
      <button onClick={() => onDecrement(10)}>-10</button>
      <button onClick={() => onDecrement()}>-1</button>
      <span> {value} </span>
      <button onClick={() => onIncrement()}>+1</button>
      <button onClick={() => onIncrement(10)}>+10</button>
    </div>
  );
}

// Validate prop types during development to catch possible errors
Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

// Export container component as default
export default connect(
  // Retrieve component initializer prop(s) from global state
  (state) => ({ value: state.counter.value }),

  // Dispatch Redux actions based on the component's invoked events
  (dispatch) => bindActionCreators({
    onIncrement: incrementCounter,
    onDecrement: decrementCounter,
  }, dispatch)
)(Counter);
