
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About'


function App() {
  return (
    <>
        <Navbar title="Case Changer"/>
        <div className="container">
          <TextForm heading= "Enter text to change its Case"/>
        </div>
        {/* <About/> */}
    </>
  );
}

export default App;
