import React, { useState, useEffect } from 'react';
import { getAllTasks, deleteTask } from '../services/taskService';
import TaskItem from './TaskItem';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getAllTasks()
            .then(response => {
                setTasks(response.data.tasks);
            })
            .catch(error => {
                console.error('There was an error fetching the tasks!', error);
            });
    }, []);

    const handleDelete = (id) => {
        deleteTask(id)
            .then(() => {
                setTasks(tasks.filter(task => task.ID_Tarea !== id));
            })
            .catch(error => {
                console.error('There was an error deleting the task!', error);
            });
    };

    return (
        <div>
            <h1>Task List</h1>
            <ul>
                {tasks.map(task => (
                    <TaskItem key={task.ID_Tarea} task={task} onDelete={handleDelete} />
                ))}
            </ul>
        </div>
    );
};

export default TaskList;

