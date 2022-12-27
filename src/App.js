import './App.css';
import {TodoList } from './components/todo-list';
import { AddTodo } from "./components/add-todo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddTodo />
        <TodoList />
      </header>
    </div>
  );
}

export default App;