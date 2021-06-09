import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import langReducer from './reducers/langReducer';
//import listReducer from './reducers/listReducer';
import notificationReducer from './reducers/notificationReducer';


const rootReducer = combineReducers({
    lang: langReducer,
    //list: listReducer,
 //   notification: notificationReducer
});

//composeWithDevTools()
const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

export default store;