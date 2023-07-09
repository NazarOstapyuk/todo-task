import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {editTodos} from "../../helper/functions.helpers";
import {ITask, ITodoState} from "../../interfaces/general";

const initialState: ITodoState = {
  task: [],
  filterTasks: [],
  doneFilter: false,
  showDeleteModal: false,
  deleteData:null
};

export const todoSlider = createSlice({
  name: "task",
  initialState,
  reducers: {
    toggleDeleteModal: (state) => {
      state.showDeleteModal = !state.showDeleteModal;
    },
    setDeleteData: (state, action: PayloadAction<ITask | null>) => {
      state.deleteData = action.payload;
    },
    addTask: (state, action: PayloadAction<{ id: string; taskName: string }>) => {
      const createTask: ITask = {
        id: action.payload.id,
        title: action.payload.taskName,
        done: false,
      };
      state.task.unshift(createTask);
      if (state.doneFilter) {
        state.filterTasks = state.filterTasks.filter((item) => item.done);
      }
      state.filterTasks.unshift(createTask);
    },
    deleteTask: (state, action: PayloadAction<string | undefined>) => {
      state.task = state.task.filter((item) => item.id !== action.payload);
      state.filterTasks = state.filterTasks.filter((item) => item.id !== action.payload);
    },
    actionTask: (state, action: PayloadAction<string>) => {
      state.task = editTodos(state.task, action.payload);
      state.filterTasks = editTodos(state.filterTasks, action.payload);
    },
    searchFilter: (state, action: PayloadAction<string>) => {
      const searchTerm = action.payload.toLowerCase();
      if (state.doneFilter) {
        state.filterTasks = state.task.filter(
            (item) => item.done && item.title.toLowerCase().includes(searchTerm)
        );
      } else {
        state.filterTasks = state.task.filter((item) =>
            item.title.toLowerCase().includes(searchTerm)
        );
      }
    },
    allTasks: (state) => {
      state.filterTasks = state.task;
      state.doneFilter = false;
    },
    completeTasks: (state) => {
      state.filterTasks = state.task.filter((item) => item.done);
      state.doneFilter = true;
    },
  },
});

export const { addTask,setDeleteData, toggleDeleteModal, deleteTask, actionTask, searchFilter, allTasks, completeTasks } =
  todoSlider.actions;
export default todoSlider.reducer;
