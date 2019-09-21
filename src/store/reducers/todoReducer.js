import {
    ADD_TODO,
    CHANGE_ACTIVE_TODO,
    CHANGE_TODO_NAME,
} from '../types';

export const initialState = {
    newTodo: {
        id: 1,
        name: '',
        author: 'Petrov P.P.',
        isActive: true,
    },
    items: [

    ]
};

export default function Todo (state = initialState, action) {
    switch (action.type) {
        case CHANGE_TODO_NAME:
            return {
                ...state,
                newTodo: {
                    ...state.newTodo,
                    name: action.name
                }
            };
        case ADD_TODO: {
            let newId = 0;
            if (state.items.length !== 0) {
                state.items.map((item) => {
                    if (item.id >= newId) {
                        newId = item.id;
                    }
                    return null;
                });
                newId += 1;
            }
            return {
                ...state,
                items: [
                    ...state.items,
                    {
                        ...state.newTodo,
                        id: newId,
                    }

                ],
                newTodo: {
                    ...state.newTodo,
                    name: '',
                }
            }
        }
        case CHANGE_ACTIVE_TODO: {
            let newState = state.items.map((item) => {
                if (item.id === action.id) {
                    item.isActive = !item.isActive
                }
                return item;
            });
            return {
                ...state,
                items: [
                    ...newState,
                ]
            };
        }

        default:
            return state;
    }
}