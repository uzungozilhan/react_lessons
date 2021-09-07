// import logo from './logo.svg';
import './App.css';
// import FunctionComponent from "./FunctionComponent";

import ClassComponent from "./components/ClassComponent";
import FunctionalComponent from './components/Functional';

function App() {
  return (
    <div className="App">
      <ClassComponent name="Jane Doe"/>
      <FunctionalComponent name="John Doe"/>
    </div>
  );
}

export default App;
