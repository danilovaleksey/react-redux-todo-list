import {
  CHANGE_TODO_NAME,
  ADD_TODO,
  CHANGE_ACTIVE_TODO,
} from '../types';

import {
  changeTodoName,
  addTodo,
  changeActiveTodo,
} from './todoActions';

describe('todoActions', () => {
  it(CHANGE_TODO_NAME, () => {
    const name = 'test todo';
    const expectedAction = {
      type: CHANGE_TODO_NAME,
      name: 'test todo',
    };
    expect(changeTodoName(name)).toEqual(expectedAction);
  });
  it(ADD_TODO, () => {
    const expectedAction = {
      type: ADD_TODO,
    };
    expect(addTodo()).toEqual(expectedAction);
  });
  it(CHANGE_ACTIVE_TODO, () => {
    const id = 1;
    const expectedAction = {
      type: CHANGE_ACTIVE_TODO,
      id: 1,
    };
    expect(changeActiveTodo(id)).toEqual(expectedAction);
  });
});