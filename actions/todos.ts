import { TODO_STATE } from "../reducers/todosReducerWithComposition";
import * as actions from "../types/todos";


export interface baseAction{
    readonly type: string; 
}

export interface add_todo_action extends baseAction{
    readonly id: number; 
    readonly text: string; 
}

export interface toggle_todo_action extends baseAction{
    readonly idOfTodoToToggle: number
}

export interface delete_todo_action extends baseAction{
   readonly idOfTodoToDelete: number
}

export type todo_actions = add_todo_action | toggle_todo_action | delete_todo_action; 

export function addTodoActionHelper(id: number, text: string): add_todo_action{
    return {
        type: actions.ADD_TODO_ACTION, 
        id,
        text, 
    }
}


export function toggleTodoActionHelper(id: number): toggle_todo_action{
    return {
        type: actions.TOGGLE_TODO_ACTION, 
        idOfTodoToToggle: id
    }
}

export function deleteTodoActionHelper(idOfTodoToDelete: number): delete_todo_action{
    return {
        type: actions.DELETE_TODO_ACTION, 
        idOfTodoToDelete
    }
}

