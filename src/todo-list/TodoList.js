import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Todo from './Todo';
import { addTodo, removeTodo, toggleTodo } from './todoListState';

// Define presentational component
export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { addableTodoText: '' };
  }

  handleAddableTodoTextChange = (event) => {
    this.setState({ addableTodoText: event.target.value });
  }

  render() {
    const { todos, onAddTodo, onRemoveTodo, onToggleTodo } = this.props;

    return (
      <div>
        <form onSubmit={e => {
          e.preventDefault();
          if (!this.state.addableTodoText.trim()) return;

          onAddTodo(this.state.addableTodoText);
          this.setState({ addableTodoText: '' });
        }}>
          <input
            type="text"
            placeholder="What needs to be done?"
            value={this.state.addableTodoText}
            onChange={this.handleAddableTodoTextChange}
          />
          <button type="submit">+</button>
        </form>

        <ul>
          {todos.map((todo) =>
            <Todo
              key={todo.id}
              {...todo}
              onToggle={onToggleTodo}
              onRemove={onRemoveTodo}
            />
          )}
        </ul>
      </div>
    );
  }
}

// Validate prop types during development to catch possible errors
TodoList.propTypes = {
  todos: PropTypes.arrayOf(React.PropTypes.object).isRequired,
  onAddTodo: PropTypes.func.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
  onToggleTodo: PropTypes.func.isRequired,
};

// Export container component as default
export default connect(
  // Retrieve component initializer prop(s) from global state
  (state) => ({ todos: state.todoList.items }),

  // Dispatch Redux actions based on the component's invoked events
  (dispatch) => bindActionCreators({
    onAddTodo: addTodo,
    onRemoveTodo: removeTodo,
    onToggleTodo: toggleTodo,
  }, dispatch)
)(TodoList);
