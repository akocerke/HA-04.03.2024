const axios = require("axios");
const TodosQueries = require("./TodosQueries");

jest.mock("axios");

const todoValue1 = {
  id: 6,
  userId: 1,
  task: "Trinken",
  isDone: true,
  dueDate: "2024-11-10T00:00:00.000Z",
  createdAt: "2024-02-28T08:17:33.000Z",
  updatedAt: "2024-02-28T13:10:19.000Z",
};

describe("Testing GET Functions of Todo Route", () => {
  test("Teste TodosQueries Funktion", async () => {
    const mockData = {
      data: [todoValue1]
    };
    axios.get.mockResolvedValue(mockData);

    const result = await TodosQueries.fetchAllTodos();

    expect(result).toEqual(mockData.data);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
      "http://localhost:5051/v1/todos/all"
    );
  });

  test("Teste GET byId Funktion", async () => {
    const myInput = { data: { todo: todoValue1 } };
    axios.get.mockResolvedValue(myInput);

    const result = await TodosQueries.fetchTodoById(6);

    expect(result).toEqual(myInput.data.todo);
    expect(axios.get).toHaveBeenCalledTimes(2);
    expect(axios.get).toHaveBeenCalledWith(
      "http://localhost:5051/v1/todos/byid",
      { params: { todoId: 6 } }
    );
  });

  test("Teste fetchUserTodos Funktion", async () => {
    const myInput = { data: { todos: todoValue1 } };
    axios.get.mockResolvedValue(myInput);

    const result = await TodosQueries.fetchUserTodos(1); // Hier direkt die UserID 1 verwenden

    expect(result).toEqual(myInput.data.todos);
    expect(axios.get).toHaveBeenCalledTimes(3);
    expect(axios.get).toHaveBeenCalledWith(
        "http://localhost:5051/v1/todos/byuserid",
        { params: { userId: 1 } }
    );
});

});
