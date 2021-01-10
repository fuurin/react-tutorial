import React from "react";
import { observer } from "mobx-react";

@observer
export default class TodoList extends React.Component {
  createNew = (e) => {
    if (e.which === 13) { // 押されたキーがReturn/Enterのとき
      this.props.store.createTodo(e.target.value);
      e.target.value = "";
    }
  }

  filter = (e) => {
    this.props.store.filter = e.target.value;
  }

  render() {
    const { filter, filteredTodos, clearComplete } = this.props.store;
    const todoList = filteredTodos.map(todo => (
      <li key={todo.id}>
        <label>
          <input type="checkbox"
                // toggleCompleteの中ではthisをtodo自身にしなければならない。
                // このbindがないとthisはundefinedになってしまう
                // clearCompleteも同様の理由でbindしてある。
                onChange={todo.toggleComplete.bind(todo)}
                value={todo.complete}
                checked={todo.complete} />
          {todo.text} (id: {todo.id})
        </label>
      </li>
    ));
    
    return <div>
      <h1>todos</h1>
      <input class="create" onKeyPress={this.createNew} />
      <input class="filter" value={filter} onChange={this.filter} />
      <ul>{todoList}</ul>
      <button onClick={clearComplete.bind(this.props.store)}>Clear Complete</button>
    </div>;
  };
}