export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_TODO_TEXT = 'SET_TODO_TEXT'
export const SET_EDITING_TODO = 'SET_EDITING_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    payload: text
  }
}

export const toggleTodo = (todoId) => {
  return {
    type: TOGGLE_TODO,
    payload: todoId
  }
}

export const setTodoText = (text) => {
  return {
    type: SET_TODO_TEXT,
    payload: text
  }
}

export const setEditingTodo = (todo) => {
  return {
    type: SET_EDITING_TODO,
    payload: todo
  }
}

export const updateTodo = (todo) => {
  return {
    type: UPDATE_TODO,
    payload: todo
  }
}