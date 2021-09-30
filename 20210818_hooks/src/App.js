import { useState } from "react";
import './App.css';
import ClassComponent from './ClassComponent';
import FunctionalComponent from './FunctionalComponents';

function App() {
  const [isVisible, setVisible] = useState(true);
  // console.log(isVisible);

  return (
    <div className="App">
      {/* <button onClick={()=> setVisible(!isVisible)}>Toggle</button> */}
      {false && <ClassComponent />}
      {/* <ClassComponent /> */}
      {isVisible ? <FunctionalComponent/> : null}
      {/* <FunctionalComponent/> */}
    </div>
  );
}

export default App;
