import React from 'react';
import PropsTypes from 'prop-types';

export class TodoList extends React.Component {
  handleDelete() {
    this.props.onTodoDelete(this.props.todo.id);
  }
  render() {
    const { todo } = this.props;
    return (
      <div>
        <h2>{todo.title}</h2>
        <div>{todo.text}</div>
        <button onClick={this.handleDelete.bind(this)}>削除</button>
      </div>
    );
  }
}

TodoList.propTypes = {
  onTodoDelete: PropsTypes.func.isRequired,
  todo: PropsTypes.shape({
    id: PropsTypes.date,
    title: PropsTypes.string.isRequired,
    text: PropsTypes.string.isRequired,
  }),
};

TodoList.defaultProps = {
  todo: PropsTypes.shape({
    id: '',
  }),
};
