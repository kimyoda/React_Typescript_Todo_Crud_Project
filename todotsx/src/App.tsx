import { FaClipboardList, FaPen } from "react-icons/fa";
import TodoList from "./components/TodoList";
import "./CSS/App.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="logoside">
          <FaPen />
          <h1>무슨일을 할꺼야?</h1>
          <FaClipboardList />
        </div>
      </div>
      <TodoList />
    </div>
  );
}

export default App;
