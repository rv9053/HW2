import React from 'react'
import {Todo} from '../model'
import SingleTodo from './SingleTodo'
import './styles.css'
// import { Droppable } from 'react-beautiful-dnd'


interface props {
    todos: Array<Todo>
    setTodos : React.Dispatch<React.SetStateAction<Array<Todo>>>
    setCompletedTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>
    CompletedTodos: Array<Todo>
}

const TodoList: React.FC<props> = ({todos, setTodos, setCompletedTodos, CompletedTodos}) => {
  return (
    <div className='todos'>
        {todos.map((todo) => (
            <SingleTodo 
                todo={todo} 
                key={todo.id} 
                todos={todos}
                setTodos = {setTodos}
                />
        ))}
    </div>
  )
}

export default TodoList