import { List, ListAction, ADD_LIST, GET_LISTS, UPDATE_LIST, ADD_TASK, SET_TASK_TO_DELETE, UNSET_TASK_TO_EDIT, DELETE_TASK, SET_TASK_TO_EDIT, UPDATE_TASK, Task, DELETE_LIST, SET_SELECTED_LIST, SET_LIST_TO_EDIT, SET_LISTID_TO_DELETE, GET_LISTS_BY_ID } from '../types';


export const addList = (list: List): ListAction => {
    return {
        type: ADD_LIST,
        payload: list
    }
}



export const getLists = (): ListAction => {
    return {
        type: GET_LISTS
    }
}



export const getListById = (id: string): ListAction => {
    return {
        type: GET_LISTS_BY_ID,
        payload: id
    }
}



// export const setListIdToDelete = (id: string): ListAction => {
//     return {
//         type: SET_LISTID_TO_DELETE
//     }
// }



export const SetListToEdit = (id: string): ListAction => {
    return {
        type: SET_LIST_TO_EDIT,
        payload: id,
    }
}


export const SetSelectedList = (id: string): ListAction => {
    return {
        type: SET_SELECTED_LIST,
        payload: id,
    }
}

export const deleteList = (id: string): ListAction => {
    return {
        type: DELETE_LIST,
        payload: id
    }
}

export const updateList = (id: string, name: string): ListAction => {
    return {
        type: UPDATE_LIST,
        payload: {
            id,
            name
        }
    }
}


export const addTask = (task: Task, list: List): ListAction => {
    return {
        type: ADD_TASK,
        payload: {
            task,
            list
        }
    }
}


export const SetTaskToDelete = (task: Task, list: List): ListAction => {
    return {
        type: SET_TASK_TO_DELETE,
        payload: {
            task,
            list
        }
    }
}



// export const unsetTaskToDelete = (): ListAction => {
//     return {
//         type: UNSET_TASK_TO_EDIT
//     }
// }

// export const delteTask = (task: Task, list: List): ListAction => {
//     return {
//         type: DELETE_TASK,
//         payload: {
//             task,
//             list
//         }
//     }
// }


export const setTaskToEdit = (task: Task, list: List): ListAction => {
    return {
        type: SET_TASK_TO_EDIT,
        payload: {
            task, list
        }
    }
}



// export const unsetTaskToEdit = (): ListAction => {
//     return {
//         type: UNSET_TASK_TO_EDIT
//     }
// }


export const updateTask = (taskId: string, taskName: string, taskState: boolean, list: List): ListAction => {
    return {
        type: UPDATE_TASK,
        payload: {
            taskId,
            taskName,
            taskState,
            list
        }
    }
}