import React from 'react'
import Proptypes from 'prop-types'
import './Navbar.css';
import {
  BrowserRouter as Router,
  // // Switch,
  // Routes,
  // Route,
  Link
} from "react-router-dom";

export default function Navbar(props) {

  // const [myStyle, setMyStyle] = userState({
  //   color: 'black',
  //   backgroundColor: 'white'
  // })

  // const [btnText, setBtnText] = userState("Dark")

  // const toggleMode = () =>{
  //     if(myStyle.color === "black"){
  //       setMyStyle({
  //         color: "white",
  //         backgroundColor: "black"
  //       })
  //       setBtnText("Light")
  //     }
  //     else
  //     {
  //       if(myStyle.color === "white"){
  //         setMyStyle({
  //           color: "black",
  //           backgroundColor: "white"
  //         })

  //     }
  //     setBtnText("Dark")

  // }


  return (
    <nav className="asdf">
    <div className="container-fluid">
      <span>
      <Link className="navbar-brand" to="/">{props.title}</Link>
      </span>
      <span>
      <Link className="navbar-brand" to="/about">About</Link>
      </span>
      {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon">jhbjhhjhhvjhvhvvhhhv</span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a link className="nav-link active" aria-current="page" to="/about">About</a>
          </li>
          
        </ul>
        
      </div> */}
    </div>
  </nav>
  )
}


Navbar.propsTypes = {
  title: Proptypes.string,

}

Navbar.defaultProps = {
  title: 'you can set title'
}