import {applyMiddleware, combineReducers, createStore} from "redux";
import todosReducer from "./reducers/todosReducerWithComposition";

const rootReducer = combineReducers({
    todosReducer
});

function configureStore() {
    return createStore(
        rootReducer,
    )
}

export default configureStore;