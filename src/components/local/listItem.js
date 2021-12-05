import React from "react";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setOneTodoAction} from "../../store/actions/TodoAction";

const ListItem = ({item, type}) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const func = () => {
        history.push(`/one/${item.id}`);
        if (type){
            dispatch(setOneTodoAction(item));
        }
    }

    return (
        <div style={{border: '1px solid', padding: 5}}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            <button onClick={()=>func()}>Перейти</button>
        </div>
    )
}

export default ListItem;