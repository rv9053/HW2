import {useState} from 'react'

const StateTutorial2 = () => {

    const [inputValue, setInputValue] = useState('Abc')
  
    //JavaScript
    let onChange = (e)=> {
        const newValue = e.target.value;
        setInputValue(newValue)
    }

    return (
    <div>
        <input placeholder='Please enter somethong' onChange={onChange}/>
        <br/>
        <div>
        Hello {inputValue}!
        </div>
    </div>
  )
}

export default StateTutorial2