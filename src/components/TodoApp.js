import React, { useState } from 'react';
import TaskList from './TaskList';
import '../style/TodoApp.css'

function TodoApp() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, { text: newTask, completed: false }]);
            setNewTask('');
        }
    };

    const handleRemoveTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    const handleCompleteTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
    };

    const pendingTasks = tasks.filter(task => !task.completed).length;
    const completedTasks = tasks.filter(task => task.completed).length;

    return (
        <div className='contenedor'>
            <h1>Mis metas</h1>
            <div className='input-task'>
                <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Nueva meta..."/>
                <button onClick={handleAddTask}>Agregar</button>
            </div>
            <div className='contador-tasks'>
                <p>Completadas: {completedTasks}</p>
                <p>Pendientes: {pendingTasks}</p>
            </div>
            <TaskList tasks={tasks} onRemoveTask={handleRemoveTask} onCompleteTask={handleCompleteTask} />

        </div>
        );
    }

export default TodoApp;
