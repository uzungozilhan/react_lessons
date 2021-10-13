import { useState } from "react";
import FormComponent from '../src/components/form/Form';
import Contacts from '../src/components/contacts/Contacts'

const initialState = { username: "", phoneNumber: "", gender: "NO INFO" };


function App() {

  
  const [info, setInfo] = useState(initialState);

  return <div className='App'>
    <FormComponent
        
        className="form"
        info={info}
        setInfo={setInfo}
      />
    <Contacts/>
  </div>
}

export default App;