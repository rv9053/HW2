import {useEffect, useLayoutEffect, useRef} from 'react'

const LayoutEffect = () => {

    const inputRef = useRef(null)

    useLayoutEffect(()=> {
        console.log(inputRef.current.value)
    })

    useEffect(()=>{
        inputRef.current.value = "Hello"
    },[])

  return (
    <div className='App'>
        <input type='text' ref={inputRef} value='I am first'/>
    </div>
  )
}

export default LayoutEffect