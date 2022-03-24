import {useState, useReducer} from 'react'
// import { BsFillArrowUpSquareFill,BsFillArrowDownSquareFill } from "react-icons/bs";

const reducer = (state, action) =>{
    switch(action.type){
        case "INCREMENT":
            return{count: state.count + 1, text: ('we are incrementing'), img:<img src={'../image/Raj2.jpeg'}/>}
        case "DECREMENT":
            return {count: state.count - 1, text: ('we are decrementing'), img:<img src={'../image/Raj3.jpeg'}/>}
        default:
            return state;
    }
}

const Reducer = () => {

    //using useState

//     const [count, setCount] = useState(0)
//     const [text, setText] = useState('what are we doing?')
//     const [img, setImg] = useState(<img src='img1'/>)



//   return (
//     <div>
//         <h1>{count}</h1>
//         <button
//         onClick={()=>{
//             setCount(count+1)
//             setText('we are incrementing')
//             setImg(<img src={'../image/Raj2.jpeg'}/>)
//         }}>
//             Increment
//         </button>
//         <button
//         onClick={()=>{
//             setCount(count-1)
//             setText('we are decrementing')
//             setImg(<img src={'../image/Raj3.jpeg'}/>)
//             }}>
//             Decrement
//         </button>
//         <br/>
//         {text}..!
//         {img}
//     </div>
//   )


//Using Reducer//

const [state, dispatch] = useReducer(reducer, {count:0, text:'what are we doing?', img:<img src='img1'/>})

// const [text, setText] = useState('what are we doing?')
// const [img, setImg] = useState(<img src='img1'/>)



return (
<div>
    <h1>{state.count}</h1>
    <button
    onClick={()=>{
        dispatch({type: "INCREMENT"})
    }}>
        Increment
    </button>
    <button
    onClick={()=>{
        dispatch({type: "DECREMENT"})
        }}>
        Decrement
    </button>
    <br/>
    {state.text}..!
    {state.img}
</div>
)

}

export default Reducer