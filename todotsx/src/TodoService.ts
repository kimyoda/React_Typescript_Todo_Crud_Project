import TodoTypes from "./todo";

const LOCAL_STORAGE_KEY = "todos";

const TodoService = {
  // Get Todos
  getTodos: (): TodoTypes[] => {
    const todoStr = localStorage.getItem(LOCAL_STORAGE_KEY);
    return todoStr ? JSON.parse(todoStr) : [];
  },

  // Adding Todos
  addTodos: (text: string): TodoTypes => {
    const todos = TodoService.getTodos();
    const newTodo: TodoTypes = { id: todos.length + 1, text, completed: false };

    const updateTodos = [...todos, newTodo];
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updateTodos));
    return newTodo;
  },

  // Updating The Todo
  updateTodo: (todo: TodoTypes): TodoTypes => {
    const todos = TodoService.getTodos();

    // updateTodos map 적절한 인덱스 명칭 변경
    const updateTodos = todos.map((currentTodo) =>
      currentTodo.id === todo.id ? todo : currentTodo
    );
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updateTodos));
    return todo;
  },

  // Deleteing the todo
  deleteTodo: (id: number): void => {
    const todos = TodoService.getTodos();

    const updateTodos = todos.filter((todo) => todo.id !== id);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updateTodos));
  },
};

export default TodoService;
