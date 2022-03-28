import { forwardRef, useImperativeHandle, useState }  from 'react'



const Button = forwardRef((props, ref) => {
    const [toggle, setToggle] = useState(true)

    useImperativeHandle(ref, ()=> ({
        alterToggle() {
            setToggle(!toggle);
          },
    }))
  return (
    <div>
        <button>Button From Child</button>
        {toggle && <span>Toggle</span>}
    </div>
  )
})

export default Button