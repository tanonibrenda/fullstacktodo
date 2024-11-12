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
        
        // Validaciones
        if (!task.Tarea) {
            alert("La tarea no puede estar vacía");
            return;
        }
        if (new Date(task.Fecha_Límite) < new Date(task.Fecha_Creación)) {
            alert("La fecha límite no puede ser anterior a la fecha de creación");
            return;
        }

        createTask(task)
            .then(response => {
                alert("Tarea creada con éxito");
                // Limpia el formulario o redirige
                setTask({
                    ID_Lista: '',
                    Tarea: '',
                    Prioridad: 'Hacer',
                    Estado: 'No Iniciado',
                    Fecha_Creación: new Date().toISOString().slice(0, 10),
                    Fecha_Límite: '',
                });
            })
            .catch(error => {
                alert("Hubo un error creando la tarea");
                console.error('Error:', error);
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
