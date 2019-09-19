import { combineReducers } from "redux";
import ToDoList  from './todoReducer';

const rootReducer = combineReducers({
    ToDoList
});

export default rootReducer;