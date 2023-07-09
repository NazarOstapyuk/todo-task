export interface ITask {
    id: string;
    title: string;
    done: boolean;
}

export interface ITodoState {
    task: ITask[];
    filterTasks: ITask[];
    doneFilter: boolean;
    showDeleteModal: boolean;
    deleteData: ITask | null;
}
