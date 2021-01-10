import { observable } from "mobx";

function createTodo(text) {
  return observable({
    text: text,
    id: Date.now(),
    complete: false,
    toggleComplete () {
      this.complete = !this.complete
    }
  })
}

export default store = window.store = observable({
  todos: [],
  filter: "",
  createTodo (text) {
    this.todos.push(createTodo(text));
  },
  get filteredTodos() {
    var matchesFilter = new RegExp(this.filter, "i");
    return this.todos.filter(todo => !this.filter || matchesFilter.test(todo.text));
  },
  clearComplete () {
    const incompleteTodos = this.todos.filter(todo => !todo.complete);
    this.todos.replace(incompleteTodos);
  }
})

