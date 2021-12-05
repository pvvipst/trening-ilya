import {applyMiddleware, combineReducers, createStore} from "redux";
import TodoReducer from "./reducers/TodoReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const reducers = combineReducers({
    todo: TodoReducer
})

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;