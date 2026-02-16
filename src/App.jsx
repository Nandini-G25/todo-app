import { useState, useEffect } from "react";
import Todoinput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const saveTasks = JSON.parse(localStorage.getItem("tasks"));
    if(saveTasks){
      setTasks(saveTasks);
    }
  }, []);

    useEffect(() => {
      if(tasks.length > 0){
      localStorage.setItem("tasks", JSON.stringify(tasks));
      }
    }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, { text: newTask, completed: false}]);
  };
  
  const deleteTask = (index) => {
    const updatedTask = tasks.filter((_, i) => i !== index);
    setTasks(updatedTask);
  };

  const toggleTask = (index) => {
    const updatedTasks =tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed} : task
    );
  setTasks(updatedTasks);
  };
  // filter logic
    const filteredTasks = tasks.filter((task) => {
      if (filter === "active") return !task.completed;
      if (filter === "completed") return task.completed;
      return true; //"all"
    });



  return (
    <div className="app">
      <h1>Todo App</h1>
      <div className="filters">
        <button onClick={() => setFilter("all")}
          style={{ fontWeight: filter === "all" ? "bold" : "normal"}}
          >
            All
          </button>
          <button onClick={() => setFilter("active")}
          style={{ fontWeight: filter === "active" ? "bold" : "normal"}}
          >
            Active
          </button>
          <button onClick={() => setFilter("completed")}
          style={{ fontWeight: filter === "completed" ? "bold" : "normal"}}
          >
            Completed
          </button>
      </div>
      <Todoinput addTask={addTask} />
      <TodoList 
        tasks={filteredTasks} 
        deleteTask={deleteTask}
        toggleTask={toggleTask}
        />
    </div>
  );
}

export default App;