const axios = require("axios");
const TodosMutations = require("./TodosMutations");

// Axios .get Methode soll die weitere Funktion mockResolvedValue erhalten
jest.mock("axios");

const returnedTodo1 = {
  id: 6,
  userId: 1,
  task: "Trinken",
  isDone: true,
  dueDate: "2024-11-10T00:00:00.000Z",
  createdAt: "2024-02-28T08:17:33.000Z",
  updatedAt: "2024-02-28T13:10:19.000Z",
};

// POST
describe("Testing POST Functions of Todo Route", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("Teste POST Create Funktion", async () => {
    const mockData = {
      data: { todo: returnedTodo1 },
    };
    axios.post.mockResolvedValue(mockData);
    const myDate = new Date();
    const result = await TodosMutations.createTodo(1, "Essen", false, myDate);

    expect(result).toEqual(mockData.data.todo);
    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith(
      "http://localhost:5050/v1/todos/create",
      { newDueDate: myDate, newIsDone: false, newTask: "Essen", newUserId: 1 }
    );
  });
});

// PUT
describe("Testing PUT Functions of Todo Route", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("Teste markTodo Funktion", async () => {
    const mockData = {
      data: { updatedTodo: { id: 6, isDone: true } },
    };
    axios.put.mockResolvedValue(mockData);

    const result = await TodosMutations.markTodo(6, true);

    expect(result).toEqual(mockData.data.updatedTodo);
    expect(axios.put).toHaveBeenCalledTimes(1);
    expect(axios.put).toHaveBeenCalledWith(
      "http://localhost:5050/v1/todos/mark",
      { todoId: 6, newIsDone: true }
    );
  });

  test("Teste updateTodo Funktion", async () => {
    const mockData = {
      data: {
        updatedTodo: {
          id: 6,
          task: "Essen",
          isDone: false,
          dueDate: "2024-11-10T00:00:00.000Z",
        },
      },
    };
    axios.put.mockResolvedValue(mockData);

    const result = await TodosMutations.updateTodo(
      6,
      "Essen",
      false,
      "2024-11-10T00:00:00.000Z"
    );

    expect(result).toEqual(mockData.data.updatedTodo);
    expect(axios.put).toHaveBeenCalledTimes(1);
    expect(axios.put).toHaveBeenCalledWith(
      "http://localhost:5050/v1/todos/update",
      {
        todoId: 6,
        newTask: "Essen",
        newIsDone: false,
        newDueDate: "2024-11-10T00:00:00.000Z",
      }
    );
  });
});

// DELETE
describe("Teste deleteTodo Funktion", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("Delete Todo Successfully", async () => {
    const todoId = returnedTodo1.id; // Die Todo-ID aus den zurückgegebenen Daten
    const myInput = {
      data: { deletedTodosId: returnedTodo1.id }, // Verwenden die Todo-ID aus den Daten
    };
    axios.delete.mockResolvedValue(myInput);

    const result = await TodosMutations.deleteTodo(todoId);

    // Erfolgsnachricht ausgeben
    console.log("Todo ID erfolgreich gelöscht:", result);

    expect(result).toEqual(todoId);
    expect(axios.delete).toHaveBeenCalledTimes(1);
    expect(axios.delete).toHaveBeenCalledWith(
      "http://localhost:5050/v1/todos/delete",
      { data: { todoId } }
    );
  });

  test("Delete Todo Not Found Error", async () => {
    const todoId = 7; // Eine nicht vorhandene Todo-ID
    const errorMessage = "Todo ID not found";
    const error = new Error(errorMessage);
    axios.delete.mockRejectedValue(error); // Die Funktion deleteTodo wirft einen Fehler, wenn die Todo-ID nicht gefunden wird

    // Fehlermeldung ausgeben
    console.log("Fehler beim Löschen der Todo ID:", todoId, error.message);

    await expect(TodosMutations.deleteTodo(todoId)).rejects.toThrow(
      errorMessage
    );
    expect(axios.delete).toHaveBeenCalledTimes(1);
    expect(axios.delete).toHaveBeenCalledWith(
      "http://localhost:5050/v1/todos/delete",
      { data: { todoId } }
    );
  });

  test("Delete Todo Not Found Error", async () => {
    const todoId = 7; // Simulierte Todo-ID, die nicht in der Datenbank vorhanden ist
    const errorMessage = `Todo ID ${todoId} not found`; // Fehlermeldung mit der nicht gefundenen Todo-ID
    const error = new Error(errorMessage);
    axios.delete.mockRejectedValue(error); 

    // Überprüfe, ob die Todo-ID aus den zurückgegebenen Daten mit der simulierten Todo-ID übereinstimmt
    if (returnedTodo1.id !== todoId) {
      console.log(
        `Fehler: Die Todo-ID ${todoId} stimmt nicht mit der erwarteten Todo-ID ${returnedTodo1.id} überein.`
      );
    }

    // Fehlermeldung ausgeben
    console.log("Fehler beim Löschen der Todo ID:", error.message);

    await expect(TodosMutations.deleteTodo(todoId)).rejects.toThrow(
      errorMessage
    );
    expect(axios.delete).toHaveBeenCalledTimes(1);
    expect(axios.delete).toHaveBeenCalledWith(
      "http://localhost:5050/v1/todos/delete",
      { data: { todoId } }
    );
  });
});
