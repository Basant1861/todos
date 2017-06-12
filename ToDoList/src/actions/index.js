let nextTodoId=0
export const addTodo=text => {
  return {
    type: 'ADD_TODO',
    id:nextTodoId++,
    text: text
  }
}

export const toggleTodo=id => {
  return {
    type: 'TOGGLE_TODO',
    id: id
  }
}

export const select_1= (todos,visible) => {
  return {
    type: 'ALL_TODOS',
    visible:visible,
    todos:todos
}
}

export const select_2=(todos,visible) => {
  return {type: 'COMPLETED_TODOS',
  visible:visible,
  todos:todos
}

}

export const select_3=(todos,visible) => {
  return {type: 'NOT_COMPLETED_TODOS',
  visible:visible,
  todos:todos
  }


}
