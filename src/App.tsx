import "./App.css";
import TaskManager from "./components/TaskManager";
import { TasksContextProvider } from "./store/tasks-context";

function App() {
  return (
    <div className="App">
      <TasksContextProvider>
        <TaskManager />
      </TasksContextProvider>
    </div>
  );
}

export default App;
