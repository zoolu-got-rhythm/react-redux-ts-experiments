"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var actions = require("../types/todos");
// reducer composition
var todo = function (state, action) {
    switch (action.type) {
        case actions.ADD_TODO_ACTION:
            var castedAction = action;
            return {
                id: castedAction.id,
                text: castedAction.text,
                completed: false
            };
        default:
            return state;
    }
};
var todos = function (state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case actions.ADD_TODO_ACTION:
            return state.concat([todo(undefined, action)]);
        case actions.DELETE_TODO_ACTION:
            console.log("delete action hit");
            var castedAction = action;
            if (castedAction.idOfTodoToDelete === 0)
                return state.slice(1);
            if (castedAction.idOfTodoToDelete === state.length)
                return state.slice(0, state.length - 1);
            return state.slice(0, castedAction.idOfTodoToDelete)
                .concat().slice(castedAction.idOfTodoToDelete + 1, state.length);
        case actions.TOGGLE_TODO_ACTION:
            var castedActionAsToggle_1 = action;
            // @ts-ignore
            return state.map(function (todo, index) {
                return index === castedActionAsToggle_1.idOfTodoToToggle ? __assign({}, todo, { completed: !todo.completed }) : todo;
            });
        default:
            return state;
    }
};
exports["default"] = todos;
