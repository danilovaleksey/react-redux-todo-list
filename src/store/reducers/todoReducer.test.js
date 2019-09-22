import {
  CHANGE_TODO_NAME,
  ADD_TODO,
  CHANGE_ACTIVE_TODO,
} from '../types';

import reducer, {initialState} from "./todoReducer";

describe('todoReducer', () => {
  it(CHANGE_TODO_NAME, () => {
    const action = {
      type: CHANGE_TODO_NAME,
      name: 'test todo',
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      newTodo: {
       ...initialState.newTodo,
        name: action.name,
      }
    });
  });
  it(ADD_TODO, () => {
    let action = {
      type: ADD_TODO,
    };
    const newState = {
      newTodo: {
        id: 1,
        name: 'test todo',
        author: 'Petrov P.P.',
        isActive: true,
      },
      items: [
        {
          id: 1,
          name: 'First Todo Item',
          author: 'Petrov P.P.',
          isActive: true
        },
      ]
    };
    const expectedState = {
      newTodo: {
        id: 1,
        name: '',
        author: 'Petrov P.P.',
        isActive: true,
      },
      items: [
        {
          id: 1,
          name: 'First Todo Item',
          author: 'Petrov P.P.',
          isActive: true
        },
        {
          id: 2,
          name: 'test todo',
          author: 'Petrov P.P.',
          isActive: true,
        },
      ]
    };
    expect(reducer(newState, action)).toEqual(expectedState)
  });
  it(CHANGE_ACTIVE_TODO, () => {
    const action = {
      type: CHANGE_ACTIVE_TODO,
      id: 1,
    };
    let stateBefore = {
      items: [
        {
          id: 1,
          name: 'First Todo Item',
          author: 'Petrov P.P.',
          isActive: true
        },
      ]
    };
    let stateExpected = {
      items: [
        {
          id: 1,
          name: 'First Todo Item',
          author: 'Petrov P.P.',
          isActive: false
        },
      ]
    };
    expect(reducer(stateBefore,action)).toEqual(stateExpected);
  });
});