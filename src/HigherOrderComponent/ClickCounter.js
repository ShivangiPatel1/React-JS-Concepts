// refer video : https://www.youtube.com/watch?v=B6aNv8nkUSw 
//---------------------------------------Part-1------------------------------------------------------------//
// In the following example we are counting the click event and hover function with similar count function.
// If in case client wants the functionality for counting key press event and so on.. 
//In this case solution may be lifting up the function to parent component and passdown to child component.
// But in case of complex applicaton with nested children it is not a good solution
// here comes the need of higher order component 

// HOC : used to share functions betwwen different component
// where function takes component as an argument ans returns new component
// const newComp = HOC(original Comp)

// import React ,{useState} from 'react'

// const ClickCounter = () => {
//     const [count,setCount] = useState(0)

//     const HandleIncreament =()=>{
//        setCount(count+1)
//     }
//   return (
//     <div>
//         <button onClick={HandleIncreament}>Clicked {count} times</button>
//     </div>
//   )
// }

// export default ClickCounter

//---------------------------------------Part 2 ------------------------------------------------------------------//

import React from 'react'
import UpdatedComponent from './withCounter'

const ClickCounter = (props) => {
   
  return (
    <div>
        <button onClick={props.HandleIncreament}>{props.name} Clicked {props.count} times</button>
    </div>
  )
}
//export default UpdatedComponent(ClickCounter)
export default UpdatedComponent(ClickCounter,2) //second parameter as increament value