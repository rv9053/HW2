import React, {useRef} from 'react'
import './input_style.css'

interface props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e:React.FormEvent) => void;
}

const InputField: React.FC<props> = ({todo, setTodo, handleAdd}) => {
    const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form className='input'
        onSubmit={(e) => {
        handleAdd(e)
        inputRef.current?.blur()
    }}
        >
        <input 
        className='input__box'
        type="input" 
        placeholder="Enter the task"  
        value={todo}
        ref={inputRef}
        onChange={(e)=> setTodo(e.target.value)}
        />

        <button 
        className='input_submit' 
        type="submit"
        >Add</button>
    </form>
  )
}

export default InputField