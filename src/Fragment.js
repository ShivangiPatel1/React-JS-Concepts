//-----------------------------------Theory-------------------------------------------------------//
//Fragments let you group a list of children without adding extra nodes to the DOM.
// In the followitn example if the component is wrapped inside the div element 
// it will create new node in html as you can see them in developer tools, (inspect)
// fragemnt solves this problem

import React from 'react'

// const Fragment = () => {
//   return (
//     <div><h1>
//     Fragment Demo
// </h1>
// <p>This is example for fragment</p></div>
//   )
// }

class Columns extends React.Component {
    render() {
      return (
      //---- id youu wrap this with div instead of fragment it will create new div inside the table 
      //----- which is not correct ----------------------------------------------------------------
        <>
          <td>Hello</td>
          <td>World</td>
        </>
      );
    }
  }
  
class Fragment extends React.Component {
    render() {
      return (
        <table>
          <tr>
            <Columns />
          </tr>
        </table>
      );
    }
  }
export default Fragment