import React, { useState } from "react";

//const withCounter = (WrappedComponent ) => {  // withCounter / updated component takes original component as argument (Wrapped Compo)
    const withCounter = (WrappedComponent , increamentNumber ) => { 
    const WithCounter = (props) => { //new component that is returned by component withCounter / updated component
    const [count, setCount] = useState(0);

    const HandleIncreament = () => {
      //setCount(count + 1);
      setCount(count+increamentNumber)  //it can take parameter if both the wrapped component needs different increment
    };
   
    return (
      <WrappedComponent
        HandleIncreament={HandleIncreament}
        count={count}
      {...props}  // check the theory at the end 
      />
    );
  };

  return WithCounter;   //New Compenent is exported
};

export default withCounter;

//-----------------------part 3 --------------------------------------------------------------------------------//
// When porps are passed down to wrapped component from App (or their parent component) then the are passed down
// to HOC component and not the Wrapped Component, thus spread operator with props is defined as attribute 
// so that props from the app can be used by wrapped component
//-------------------------------------------------------------------------------------------------------------//
// It can also take parameters , if different wrapped component has different value of increment 