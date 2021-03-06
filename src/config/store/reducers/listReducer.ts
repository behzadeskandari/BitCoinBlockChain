import { ADD_LIST, DELETE_LIST, GET_LISTS, GET_LISTS_BY_ID, List, ListAction, Lists, ListState, SET_LISTID_TO_DELETE, SET_LIST_TO_EDIT, UPDATE_LIST } from '../types';


// const initialState: ListState = {
//     lists: {},
//     listIdDelete: '',
//     listToEdit: null,
//     listsById: null,
//     selectedList: null,
//     taskToDelete: null,
//     taskToEdit: null
// }

const getListsFormLS = (): Lists => {
    if (localStorage.getItem('task_list')) {
        return JSON.parse(localStorage.getItem('task_list') || '{}');
    }
    return {

    }

}


const saveListsToLS = (list: List) => {
    localStorage.setItem('task_list', JSON.stringify(list));
}


// export default (state = initialState, action: ListAction): ListState => {
//     const listsFromLS = getListsFormLS();
//     switch (action.type) {
//         case ADD_LIST:
//             const clonedListsFromLS = { ...listsFromLS };
//             clonedListsFromLS[action.payload.id] = action.payload;
//             //  saveListsToLS(clonedListsFromLS);
//             return {
//                 ...state,
//                 //    list: listsFromLS
//             }
//         case GET_LISTS:
//             return {
//                 ...state,
//                 //  lists: listsFromLS
//             }
//         case GET_LISTS_BY_ID:
//             const list = listsFromLS[action.payload];
//             return {
//                 ...state,
//                 listsById: list
//             }
//         case SET_LISTID_TO_DELETE:
//             return {
//                 ...state,
//                 //  listIdToDelete: action.payload
//             }
//         case SET_LIST_TO_EDIT:
//             const listToEdit = listsFromLS[action.payload];
//             return {
//                 ...state,
//                 listToEdit
//             }
//         case DELETE_LIST:
//             const clonedListsFromLS2 = { ...listsFromLS };
//             const listId = clonedListsFromLS2[action.payload].id;
//             delete clonedListsFromLS2[action.payload];
//             //    saveListsToLS(clonedListsFromLS2);
//             return {
//                 ...state,
//                 //   lists: clonedListsFromLS2,
//                 listIdDelete: '',
//                 listsById: null,
//                 selectedList: state.selectedList && listId === state.selectedList.id ? null : state.selectedList
//             }
//         case UPDATE_LIST:
//             const clonedListsFromLS3 = { ...listsFromLS };
//             clonedListsFromLS3[action.payload.id].name = action.payload.name;
//             //    saveListsToLS(clonedListsFromLS3);
//             return {
//                 ...state,
//                 //   lists: clonedListsFromLS3,
//                 listToEdit: null,
//             }

//         default:
//             return state;
//     }

// }