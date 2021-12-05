import * as types from '../types';

const initialState = {
    todos: undefined,
    todo: undefined,
}

const TodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_TODO_REQUEST:
            return {...state, todos: action.payload}
        case types.SET_ONE_TODO:
            return {...state, todo: action.payload}
        default:
            return {...state}
    }
}

export default TodoReducer;