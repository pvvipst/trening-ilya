import React from "react";
import {useParams} from "react-router-dom";
import {dataListTodo} from '../../http/data'
import {useSelector} from "react-redux";

const OneItem = () => {
    const params = useParams();

    const item = dataListTodo.find(tt => tt.id == params.id);
    const {todo} = useSelector(state => state.todo);

    const html = (
        <>
            {todo
                ? <>
                    <h3>{todo.title}</h3>
                    <p>{todo.body}</p>
                </>
                : <>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                </>
            }
        </>
    )


    return (
        <div>
            <div style={{border: '1px solid', padding: 5}}>
                {html}
                {/*<button onClick={()=>history.push(`/one/${item.id}`)}>Перейти</button>*/}
            </div>
        </div>
    )
}
export default OneItem;