import { todo_actions, add_todo_action } from "../actions/todos";
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
            }
        default: 
            return null; 
    } 
}

export interface TODOS_STATE{
    todos: TODO_STATE[] | undefined[]; 
}

const todos = (state: TODOS_STATE = [], action: todo_actions) => {
    if(state == undefined){
        state = []; 
    }
        
}







