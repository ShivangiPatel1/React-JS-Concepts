//----------------------Theory -------------------------------//
// The forwardRef method in React allows parent components to move down (or “forward”) 
// refs to their children. ForwardRef gives a child component a reference to a DOM 
// entity created by its parent component in React. This helps the child to read 
// and modify the element from any location where it is used.
// here in the example button in parent element can access the input element of 
// child component.
//-------------------------------------------------------------//

import React from "react";

const FRInput = React.forwardRef((props,ref) => {
  return (
    <div>
      <input ref={ref} type="text"></input>
    </div>
  );
});

export default FRInput;
