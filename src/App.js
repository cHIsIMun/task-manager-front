import React, { useState, useEffect } from 'react';
import { fetchTasks, createTask, updateTask, deleteTask } from './api/api';
import Task from './components/task';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskName, setNewTaskName] = useState('');
  const [editingTaskId, setEditingTaskId] = useState(null);

  useEffect(() => {
    const getTasks = async () => {
      const tasksData = await fetchTasks();
      setTasks(tasksData);
    };

    getTasks();
  }, []);

  const handleEditTask = (taskId) => {
    setEditingTaskId(taskId);
  };
  
  const handleInputChange = (event) => {
    setNewTaskName(event.target.value);
  };

  const handleAddTask = async () => {
    if (newTaskName.trim() !== '') {
      const taskId = await createTask(newTaskName);
      const newTask = {
        id: taskId,
        nome: newTaskName,
        feito: 0,
      };
      setNewTaskName('');
      const tasksData = await fetchTasks();
      setTasks(tasksData);
    }
  };
  
  

  const handleToggleTask = async (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, feito: task.feito === 1 ? 0 : 1 } : task
    );
    setTasks(updatedTasks);
    const updatedTask = updatedTasks.find((task) => task.id === taskId);
    await updateTask(taskId, updatedTask.nome, updatedTask.feito);
  };
  
  
  
  const handleTaskNameChange = (taskId, newName) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, nome: newName } : task
    );
    setTasks(updatedTasks);
  };
  
  const handleSaveTask = async (taskId) => {
    const task = tasks.find((task) => task.id === taskId);
    await updateTask(taskId, task.nome, task.feito);
    setEditingTaskId(null);
  };
  
  const handleDeleteTask = async (taskId) => {
    await deleteTask(taskId);
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Tarefas</h1>
      <input type="text" value={newTaskName} onChange={handleInputChange} />
      <button onClick={handleAddTask}>Adicionar Tarefa</button>
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            editingTaskId={editingTaskId}
            handleToggleTask={handleToggleTask}
            handleEditTask={handleEditTask}
            handleTaskNameChange={handleTaskNameChange}
            handleSaveTask={handleSaveTask}
            handleDeleteTask={handleDeleteTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
