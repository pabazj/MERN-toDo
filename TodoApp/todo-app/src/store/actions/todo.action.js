import * as types from "../constants/toDo";
import axios from "axios";

const URL = 'http://localhost:8000/todo';

const getTodo = (item) => ({
 type: types.GET_TO_DOS,
 payload: item
});

const todoDeleted = (item) => ({
    type: types.DELETE_TO_DOS
   });
   const todoadded = (item) => ({
    type: types.ADD_TO_DOS
   });
   const getSingleTodo= (item) => ({
    type: types.GET_SINGLE_TO_DO,
    payload: item
   })


export const getTodos = () => {
    // console.log(process.env.REACT_APP_API, '..')
    return function (dispatch) {
        axios.get(URL)
        .then((res)=>{
            // console.log(res.data)
            dispatch(getTodo(res.data));
        })
        .catch((err) => console.log(err))
    }
}

export const deleteTodos = (id) => {
    return function (dispatch) {
        axios.delete(`${URL}/${id}`)
        .then((res)=>{
            // console.log(res.data)
            dispatch(todoDeleted());
            dispatch(getTodo());
        })
        .catch((err) => console.log(err, '..yyy'))
    }
}

export const addTodos = (toDo) => {
    return function (dispatch) {
        axios.post(`${URL}/add`, toDo)
        .then((res)=>{
            dispatch(todoadded());
            dispatch(getTodo());
        })
        .catch((err) => console.log(err, '..yyy'))
    }
}

export const getTodoById = (id) => {
    console.log(id, '..h')
    let _id = id.id
    return function (dispatch) {
        axios.get(`${URL}/${_id}`)
        .then((res)=>{
            dispatch(getSingleTodo(res.data));
        })
        .catch((err) => console.log(err))
    }
}