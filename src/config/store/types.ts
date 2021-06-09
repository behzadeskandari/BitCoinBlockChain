
//#Region

export const SET_LANGUAGE = 'SET_LANGUAGE';

export interface LangState {
    language: string;
}
interface SetLanguageAction {
    type: typeof SET_LANGUAGE;
    payload: string;
}
export type LangAction = SetLanguageAction;

//#EndRegion
export const GET_LISTS = 'GET_LISTS';
export const GET_LISTS_BY_ID = 'GET_LISTS_BY_ID';
export const ADD_LIST = 'ADD_LIST';
export const DELETE_LIST = 'DELETE_LIST';
export const UPDATE_LIST = 'UPDATE_LIST';
export const SET_LISTID_TO_DELETE = 'SET_LISTID_TO_DELETE';
export const SET_LIST_TO_EDIT = 'SET_LIST_TO_EDIT';
export const SET_SELECTED_LIST = 'SET_SELECTED_LIST';
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const SET_TASK_TO_DELETE = 'SET_TASK_TO_DELETE';
export const UPDATE_TASK = 'UPDATE_TASK';
export const SET_TASK_TO_EDIT = 'SET_TASK_TO_EDIT';
export const UNSET_TASK_TO_EDIT = 'UNSET_TASK_TO_EDIT';
export const SET_NOTIFICATION = 'SET_NOTIFICATION';
export interface Task {
    name: string;
    id: string;
    completed: boolean;
}
export interface List {
    name: string;
    id: string;
    task: Task[];
}
export interface Lists {
    [id: string]: List;
}
interface AddListAction {
    type: typeof ADD_LIST;
    payload: List;
}
interface GetListsAction {
    type: typeof GET_LISTS;
}
interface GetListByIdAction {
    type: typeof GET_LISTS_BY_ID;
    payload: string;
}
interface SetListIdToDeleteAction {
    type: typeof SET_LISTID_TO_DELETE;
    payload: string
}
interface SetListsToEditAction {
    type: typeof SET_LISTID_TO_DELETE;
    payload: string;
}
interface SetListToEditAction {
    type: typeof SET_LIST_TO_EDIT;
    payload: string;
}

interface DeleteListAction {
    type: typeof DELETE_LIST,
    payload: string,
}
interface UpdateListAction {
    type: typeof UPDATE_LIST;
    payload: {
        id: string,
        name: string;
    }

}
interface SetSelectedListAction {
    type: typeof SET_SELECTED_LIST;
    payload: string;


}
interface AddTaskAction {
    type: typeof ADD_TASK;
    payload: {
        task: Task;
        list: List;
    }
}
interface DeleteTaskAction {
    type: typeof DELETE_TASK;
    payload: {
        task: Task;
        list: List;
    }
}
interface SetTaskToDeleteAction {
    type: typeof SET_TASK_TO_DELETE;
    payload: { task: Task; list: List; }
}
interface UnsetTaskToDEleteAction {
    type: typeof UPDATE_TASK;
    payload: {
        taskId: string;
        taskName: string;
        taskState: boolean;
        list: List;
    }
}
interface SetTaskToEditAction {
    type: typeof SET_TASK_TO_EDIT;
    payload: {
        task: Task;
        list: List;
    }
}
interface UnsetTaskToEditAction {
    type: typeof UNSET_TASK_TO_EDIT;
}
interface SetNotificationAction {
    type: typeof SET_NOTIFICATION;
    payload: {
        msg: string;
        type: string;
    }
}
export type ListAction = AddListAction | GetListsAction |//| EditTaskAction
    GetListByIdAction | SetListIdToDeleteAction | SetListToEditAction | DeleteListAction | UpdateListAction | SetSelectedListAction | AddTaskAction | DeleteListAction | SetTaskToDeleteAction | UnsetTaskToDEleteAction | SetTaskToEditAction | UnsetTaskToDEleteAction;
export type NotificationAction = SetNotificationAction;
export interface ListState {
    list: List;
    listIdDelete: string;
    listToEdit: List | null,
    listsById: List | null,
    selectedList: List | null;
    taskToDelete: {
        task: Task;
        lists: List;
    } | null;
    taskToEdit: {
        task: Task;
        list: List;
    } | null;
}
export interface NotificationState {
    message: string;
    type: string;
}