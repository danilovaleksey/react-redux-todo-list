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
        {
            id: 1,
            name: 'First Todo Item',
            author: 'Petrov P.P.',
            isActive: true
        },
        {
            id: 2,
            name: 'Second Todo Item',
            author: 'Sidorov S.S.',
            isActive: false
        },
        {
            id: 3,
            name: 'Second Todo Item',
            author: 'Sidorov S.S.',
            isActive: false
        }
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
            console.log(action.id);
            const newState = state.items.map((item) => {
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