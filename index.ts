import configureStore from "./store";
import {addTodoActionHelper, deleteTodoActionHelper, todo_actions, toggleTodoActionHelper} from "./actions/todos";

let store = configureStore();
let unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
});

store.dispatch(addTodoActionHelper(0, "first todo"));
store.dispatch(addTodoActionHelper(store.getState().todosReducer.length, "second todo"));
store.dispatch(toggleTodoActionHelper(1));
store.dispatch(deleteTodoActionHelper(0));





