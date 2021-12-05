import React from "react";
import ListItem from "../components/local/listItem";
import ListTodo from "../components/local/listTodo";

const style = {

}

const Main = ()=>{



    return (
        <div style={{display: 'flex'}}>
            <div style={{width: '50%'}}>
                <h2>Локально</h2>
                <ListTodo type={'local'}/>
            </div>
            <div style={{width: '50%'}}>
                <h2>Сервер</h2>
                <ListTodo type={'server'}/>
            </div>
        </div>
    )
}

export default Main;