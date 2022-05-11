interface Todo {
    text: string;
    complete: boolean;
  }

type ToggleTodo = (selectdTodo: Todo) => void