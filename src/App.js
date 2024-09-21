
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  // Switch,
  Routes,
  Route,
  // Link
} from "react-router-dom";


function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg:message,
      type: type
    })

    setTimeout(()=>{
        setAlert(null);
    },2000)
  }

  return (
    <>
        <Router>
        <Navbar title="Text Utils"/>
        <Alert alert={alert} />
        <div className="container">
        <Routes>
         
          <Route path="/about" element={<About />} /> 
          <Route path="/">
              <Route path="/" element={              <TextForm showAlert={showAlert} heading= "Enter text to change its Case"/>
} /> 
          </Route>
          </Routes>     
        </div>
       </Router> 
    </>
  );
}

export default App;
