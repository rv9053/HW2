import { useRef } from 'react'

const Ref = () => {
    const inputRef = useRef(null)

    const onClick = () => {
        inputRef.current.value=""
    }
  return (
    <div>
        <h1>Pedro</h1>
        <input type='text' placeholder='Ex...' ref={inputRef}/>
        <button onClick={onClick}>Change name</button>
    </div>
  )
}

export default Ref