import {todo_actions, add_todo_action, delete_todo_action, toggle_todo_action} from "../actions/todos";
import * as actions from "../types/todos"; 

export interface TODO_STATE {
    id: number; 
    text: string; 
    completed?: boolean; 
}

// reducer composition
const todo = (state: TODO_STATE, action: todo_actions): TODO_STATE => {
    switch(action.type){
        case actions.ADD_TODO_ACTION:
            let castedAction: add_todo_action = <add_todo_action>action; 
            return <TODO_STATE>{
                id: castedAction.id, 
                text: castedAction.text,
                completed: false
            };
        default: 
            return state;
    } 
};

type TODOS_STATE = TODO_STATE[] | undefined[];

const todos = (state: TODOS_STATE = [], action: todo_actions): TODOS_STATE => {
    switch (action.type){
        case actions.ADD_TODO_ACTION:
            return [...state, todo(undefined, action)];
        case actions.DELETE_TODO_ACTION:
            console.log("delete action hit");
            let castedAction = <delete_todo_action>action;
            if(castedAction.idOfTodoToDelete === 0)
                return state.slice(1);
            if(castedAction.idOfTodoToDelete === state.length)
                return state.slice(0, state.length - 1);
            return state.slice(0, castedAction.idOfTodoToDelete)
                .concat().slice(castedAction.idOfTodoToDelete + 1, state.length);
        case actions.TOGGLE_TODO_ACTION:
            let castedActionAsToggle = <toggle_todo_action> action;
            // @ts-ignore
            return <TODOS_STATE>state.map((todo: TODO_STATE, index: number) => {
                return index === castedActionAsToggle.idOfTodoToToggle ?
                    {...todo, completed: !todo.completed} : todo;
            });
        default:
            return state;

    }
};

export default todos;







