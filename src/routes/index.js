import {Redirect, Route, Switch} from "react-router-dom";
import Main from "../page/Main";
import OneItem from "../components/local/oneItem";

const Routes = ()=>{

    return (
        <Switch>
            <Route exact path='/' component={Main}/>
            <Route exact path='/one/:id' component={OneItem}/>
            <Route path='*'>
                <Redirect to='/'/>
            </Route>
        </Switch>
    )
}

export default Routes;