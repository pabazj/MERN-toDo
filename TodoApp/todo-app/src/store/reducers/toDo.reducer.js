import { GET_TO_DOS, DELETE_TO_DOS, ADD_TO_DOS, GET_SINGLE_TO_DO } from '../constants/toDo';

const initialState = {
    toDoList: [],
    toDo: {},
    loading: true
}

const toDoReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TO_DOS:
            return {
                ...state,
                toDoList: action.payload.data,
                loading: false
            }
        case DELETE_TO_DOS:
            return {
                ...state,
                loading: false
            }
        case ADD_TO_DOS:
            return {
                ...state,
            }
        case GET_SINGLE_TO_DO:
            return {
                ...state,
                toDo: action.payload.data,
                loading: false
            }
        default:
            return state;
    }
}
export default toDoReducer;