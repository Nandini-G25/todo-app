import TodoItem from "./TodoItem";

function TodoList( { tasks, deleteTask, toggleTask}) {
    return (
        <div>
            {tasks.map((task, index) => (
                <TodoItem 
                    key={index} 
                    task={task}
                    index={index}
                    deleteTask={deleteTask}
                    toggleTask={toggleTask}
                />
            ))}
        </div>
    );
}

export default TodoList; 