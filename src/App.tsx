import "./App.css";
import Tasks from "./components/Tasks";
import { TasksContextProvider } from "./store/tasks-context";

function App() {
  return (
    <div className="App">
      <TasksContextProvider>
        <Tasks />
      </TasksContextProvider>
    </div>
  );
}

export default App;
