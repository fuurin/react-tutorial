import React from "react";

import Todo from "../components/Todo";
import * as TodoActions from "../actions/TodoActions";
import todoStore from "../stores/TodoStore";

export default class Todos extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todoStore.getAll()
    };
  }

  componentDidMount() {
    todoStore.on("change", this.getTodos)
  }

  componentWillUnmount() {
    todoStore.removeListener("change", this.getTodos);
  }

  getTodos = () => {
    this.setState({
      todos: TodoStore.getAll()
    });
  }

  reloadTodos = () => {
    TodoActions.reloadTodos();
  }

  render() {
    const { todos } = this.state;

    const TodoComponents = todos.map((todo) => {
      return <Todo key={todo.id} {...todo}/>;
    });

    return (
      <div>
        <button onClick={this.reloadTodos}>Reload!</button>
        <h1>Todos</h1>
        <ul>{TodoComponents}</ul>
      </div>
    );
  }
}
