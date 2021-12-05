import React, {useEffect, useState} from "react";
import {dataListTodo} from '../../http/data'
import ListItem from "./listItem";
import {useDispatch, useSelector} from "react-redux";
import {getTodoAction, setOneTodoAction} from "../../store/actions/TodoAction";

const ListTodo = ({type})=>{
    const dispatch = useDispatch();
    const {todos} = useSelector(state => state.todo);

    useEffect(()=>{
        if (type === 'server'){
            dispatch(getTodoAction());
            dispatch(setOneTodoAction(undefined))
        }
    },[])

    return (
        <>
            {type === 'local' && dataListTodo.map(item=>(
                <ListItem key={item.id} item={item} />
            ))}

            {type === 'server' && todos?.map(item=>(
                <ListItem key={item.id} item={item} type={type}/>
            ))}

        </>
    )
}

export default ListTodo;