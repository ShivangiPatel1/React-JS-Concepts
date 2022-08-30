//-------------------------------Part-1--------------------------------------------------------------------//
// import React,{useState} from 'react'

// const HoverCounter = () => {
//     const [count,setCount] = useState(0)

//     const HandleIncreament =()=>{
//        setCount(count+1)
//     }
//   return (
//     <div>
//     <h1 onMouseOver={HandleIncreament}>
//         Hovered {count} times
//     </h1></div>
//   )
// }

// export default HoverCounter
//-------------------------------------------Part-2------------------------------------------------------------------//
import React from 'react'
import UpdatedComponent from './withCounter'

const HoverCounter = (props) => {
    
  return (
    <div>
    <h1 onMouseOver={props.HandleIncreament}>
        {props.name} Hovered {props.count} times
    </h1></div>
  )
}

//export default UpdatedComponent(HoverCounter)
export default UpdatedComponent(HoverCounter ,1)  //second parameter as increament value