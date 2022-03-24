import {useState} from 'react'

const StateTutorial = () => {
    
    const [counter, setCounter] = useState(0)
    

    const increment = () => {
        setCounter(counter + 1)  
    }

    const decrement = () => {
        setCounter(counter-1)
    }

  return (
    <div>
        <h3>UseState Example</h3>
        <br/>
        <div>
        {counter}
        </div>   
    <br/>
        <div>
        <button onClick={increment}>Increment</button>
        </div>
        <br/>
        <div>
        <button onClick={decrement}>Decrement</button>
        </div>
   
    </div>
  )
}

export default StateTutorial