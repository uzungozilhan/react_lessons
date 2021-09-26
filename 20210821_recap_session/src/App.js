import logo from './logo.svg';
import './App.css';
import ClassBased from './ClassBased';
import Functional from './Functional';

function App() {
  return (
    <div className="App">
      HEY!
      {/* <ClassBased name= "İlhan" surname="Uzungöz"/> */}
      <Functional/>
    </div>
  );
}

export default App;
