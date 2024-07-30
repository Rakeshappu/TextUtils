
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';



function App() {
  return (
    <>
        <Navbar title="Case Changer"/>
        <div className="container">
          <TextForm heading= "Enter text to change its Case"/>
        </div>
        
    </>
  );
}

export default App;
