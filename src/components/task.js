import React from 'react';

const Task = ({
  task,
  editingTaskId,
  handleToggleTask,
  handleEditTask,
  handleTaskNameChange,
  handleSaveTask,
  handleDeleteTask
}) => {
  return (
    <li key={task.id}>
      {editingTaskId === task.id ? (
        <>
          <input
            type="text"
            value={task.nome}
            onChange={(e) => handleTaskNameChange(task.id, e.target.value)}
          />
          <button onClick={() => handleSaveTask(task.id)}>Concluir</button>
        </>
      ) : (
        <>
          <input
            type="checkbox"
            checked={task.feito === 1}
            onChange={() => handleToggleTask(task.id)}
          />
          <span>{task.nome}</span>
          <button onClick={() => handleEditTask(task.id)}>Editar</button>
          <button onClick={() => handleDeleteTask(task.id)}>Excluir</button>
        </>
      )}
    </li>
  );
};

export default Task;
