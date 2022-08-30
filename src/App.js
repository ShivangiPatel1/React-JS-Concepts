
import './App.css';
import FRParentInput from './ForwardingRef/FRParentInput';
import Fragment from './Fragment';
import ClickCounter from './HigherOrderComponent/ClickCounter';
import HoverCounter from './HigherOrderComponent/HoverCounter';

function App() {
 
  return (
    <div className="App">
     {/* <FRParentInput/> */}
 {/* <Fragment></Fragment> */}
 <ClickCounter name={"Shivangi"}/>
 <HoverCounter name={"Shivangi"}/>
    </div>
  );
}

export default App;
