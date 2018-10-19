"use strict";
exports.__esModule = true;
var actions = require("../types/todos");
function addTodoActionHelper(id, text) {
    return {
        type: actions.ADD_TODO_ACTION,
        id: id,
        text: text
    };
}
exports.addTodoActionHelper = addTodoActionHelper;
function toggleTodoActionHelper(id) {
    return {
        type: actions.TOGGLE_TODO_ACTION,
        idOfTodoToToggle: id
    };
}
exports.toggleTodoActionHelper = toggleTodoActionHelper;
function deleteTodoActionHelper(idOfTodoToDelete) {
    return {
        type: actions.DELETE_TODO_ACTION,
        idOfTodoToDelete: idOfTodoToDelete
    };
}
exports.deleteTodoActionHelper = deleteTodoActionHelper;
