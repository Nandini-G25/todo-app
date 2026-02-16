function TodoItem( { task, index, deleteTask, toggleTask }) {
    return (
        <div>
            <p
                onClick={() => toggleTask(index)}
                style={{
                    textDecoration: task.completed ? "line-through" : "none",
                    cursor : "pointer",
                }}
                >
                {task.text}
            </p>
            <button onClick={() => deleteTask(index)}>Delete</button>
        </div>
    );
}

export default TodoItem;