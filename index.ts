import configureStore from "./store";
import {addTodoActionHelper, deleteTodoActionHelper, todo_actions, toggleTodoActionHelper} from "./actions/todos";

let store = configureStore();
let unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
});

store.dispatch(addTodoActionHelper("first todo"));
store.dispatch(addTodoActionHelper("second todo"));
store.dispatch(toggleTodoActionHelper(1));
store.dispatch(deleteTodoActionHelper(0));
store.dispatch(addTodoActionHelper("")); 





