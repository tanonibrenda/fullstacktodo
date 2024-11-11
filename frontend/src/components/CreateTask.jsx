import React, { useState } from 'react';
import { createTask } from '../services/taskService';

const CreateTask = () => {
    const [task, setTask] = useState({
        ID_Lista: '',
        Tarea: '',
        Prioridad: 'Hacer',
        Estado: 'No Iniciado',
        Fecha_Creación: new Date().toISOString().slice(0, 10),
        Fecha_Límite: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask({ ...task, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask(task)
            .then(response => {
                console.log('Task created successfully:', response.data);
                // puedes añadir lógica para actualizar la lista de tareas o redirigir al usuario
            })
            .catch(error => {
                console.error('There was an error creating the task!', error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="Tarea" value={task.Tarea} onChange={handleChange} placeholder="Nombre de la tarea" required />
            <select name="Prioridad" value={task.Prioridad} onChange={handleChange}>
                <option value="Hacer">Hacer</option>
                <option value="Planificar">Planificar</option>
                <option value="Delegar">Delegar</option>
                <option value="Ignorar">Ignorar</option>
            </select>
            <select name="Estado" value={task.Estado} onChange={handleChange}>
                <option value="No Iniciado">No Iniciado</option>
                <option value="En Curso">En Curso</option>
                <option value="Bloqueado">Bloqueado</option>
                <option value="Completado">Completado</option>
            </select>
            <input name="Fecha_Límite" type="date" value={task.Fecha_Límite} onChange={handleChange} required />
            <button type="submit">Crear Tarea</button>
        </form>
    );
};

export default CreateTask;
