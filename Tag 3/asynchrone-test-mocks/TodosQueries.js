const axios = require("axios");

async function fetchAllTodos() {
  const result = await axios.get("http://localhost:5051/v1/todos/all");

  const todos = result.data;

  return todos;
}

async function fetchTodoById(todoId) {
  const result = await axios.get("http://localhost:5051/v1/todos/byid", {
    params: { todoId },
  });

  const todo = result.data.todo; // Zugriff auf die Daten des Antwortobjekts

  console.log("Mein Todo /byid", todo);

  return todo;
}


async function fetchUserTodos(userId) {
  const result = await axios.get("http://localhost:5051/v1/todos/byuserid", {
    params: { userId },
  });

  const todos = result.data.todos; 

  console.log("Mein Todo /byuserid", todos);

  return todos;
}


module.exports = { fetchAllTodos, fetchTodoById, fetchUserTodos};