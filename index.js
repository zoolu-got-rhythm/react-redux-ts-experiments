"use strict";
exports.__esModule = true;
var store_1 = require("./store");
var todos_1 = require("./actions/todos");
var store = store_1["default"]();
var unsubscribe = store.subscribe(function () {
    console.log(store.getState());
});
store.dispatch(todos_1.addTodoActionHelper("first todo"));
store.dispatch(todos_1.addTodoActionHelper("second todo"));
store.dispatch(todos_1.toggleTodoActionHelper(1));
store.dispatch(todos_1.deleteTodoActionHelper(0));
store.dispatch(todos_1.addTodoActionHelper(""));
