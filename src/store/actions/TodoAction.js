import * as types from '../types'
import {getTodo} from "../../http";
import {SET_ONE_TODO} from "../types";

const getTodoRequest = (payload) => ({type: types.GET_TODO_REQUEST, payload})

export const getTodoAction = () => async (dispatch) =>{
    try {
        const {data} = await getTodo();
        dispatch(getTodoRequest(data));
    } catch (e){

    }
};

export const setOneTodoAction = (payload) => ({type: types.SET_ONE_TODO, payload})