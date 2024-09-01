
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, {useState} from 'react';


function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg:message,
      type: type
    })
  }

  return (
    <>
        <Navbar title="Text Utils"/>
        <Alert alert='asdas' />
        <div className="container">
          <TextForm heading= "Enter text to change its Case"/>

        </div>
        {/* <About/> */}
    </>
  );
}

export default App;
