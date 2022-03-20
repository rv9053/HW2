import React from 'react'
import { AiFillEdit,AiOutlineDelete } from 'react-icons/ai';
import { MdDoneOutline } from 'react-icons/md';
import {Todo } from '../model'
import './styles.css'


type props = {
    todo: Todo
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>

}
const SingleTodo = ({todo, todos, setTodos}: props) => {
  return (
    <form className='todos__single'>
        <span className='todos__single--text'>
            {todo.todo}
        </span>
        <div >
            <span className="icon">
                <AiFillEdit/>
            </span>
            <span className="icon">
                <AiOutlineDelete/>
            </span>
            <span className="icon">
                <MdDoneOutline/>
            </span>
        </div>

    </form>
  )
}

export default SingleTodo