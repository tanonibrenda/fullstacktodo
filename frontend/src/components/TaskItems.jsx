import React from 'react';

// Este componente renderiza un ítem de tarea
const TaskItem = React.memo(({ task, onDelete }) => {
    return (
        <li>
            {task.Tarea} - {task.Estado}
            <button onClick={() => onDelete(task.ID_Tarea)}>Delete</button>
        </li>
    );
});

export default TaskItem;
