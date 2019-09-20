import {
  CHANGE_TODO_NAME,
  ADD_TODO,
  CHANGE_ACTIVE_TODO,
} from '../types';

const changeTodoName = (name) => ({
  type: CHANGE_TODO_NAME,
  name
});

const addTodo = () => ({
  type: ADD_TODO,
});

const changeActiveTodo = (id) => ({
  type: CHANGE_ACTIVE_TODO,
  id
});

export {
  changeTodoName,
  addTodo,
  changeActiveTodo,
}