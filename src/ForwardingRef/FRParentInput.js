import React, { useRef } from 'react'
import FRInput from './FRInput'

//--------------------------------------Class Component ---------------------------------------------------//
// class FRParentInput extends Component {
//     constructor(props) {
//         super(props)
//         this.inputRef = React.createRef()
//       }
//       clickHandler=()=>{
//         this.inputRef.current.focus()
//       }
//   render() {
//     return (
//       <div>
//         <FRInput ref={this.inputRef}/>
//         <button onClick={this.clickHandler}>Focus input</button>
//       </div>
//     )
//   }
// }
//------------------------using functional component -------------------------------------------------//
 const FRParentInput =()=>{
    const inputRef = useRef()
    const clickHandler=()=>{
        inputRef.current.focus()
    }
    return (
        <div>
        <FRInput ref={inputRef}/>
         <button onClick={clickHandler}>Focus input</button>
       </div>
    )
 }

export default FRParentInput