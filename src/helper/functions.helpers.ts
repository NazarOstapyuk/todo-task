import {ITask} from "../interfaces/general";

export const editTodos = (todos: ITask[], id: string) => {
  const idx = todos.findIndex((item) => item.id === id);
  const oldTask = todos[idx];
  const newTask = { ...oldTask, done: !oldTask.done };
  const newTasks = oldTask.done
      ? [newTask, ...todos.slice(0, idx), ...todos.slice(idx + 1)]
      : [...todos.slice(0, idx), ...todos.slice(idx + 1), newTask];
  return newTasks;
};
export const generateRandomId = () => {
  const randomId = Math.random().toString(36).substring(2, 10);
  return randomId;
};
