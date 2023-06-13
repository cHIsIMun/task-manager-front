const BASE_URL = 'http://localhost:3002'; // Ajuste a porta conforme necessário

export const fetchTasks = async () => {
  const response = await fetch(`${BASE_URL}/tarefas`);
  const data = await response.json();
  return data;
};

export const createTask = async (nome) => {
  const response = await fetch(`${BASE_URL}/tarefas`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ nome }),
  });
  const data = await response.json();
  return data.id;
};

export const updateTask = async (id, nome, feito) => {
  await fetch(`${BASE_URL}/tarefas/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ nome, feito }),
  });
};

export const deleteTask = async (id) => {
  await fetch(`${BASE_URL}/tarefas/${id}`, {
    method: 'DELETE',
  });
};
