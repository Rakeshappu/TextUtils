import React,{useState} from 'react'
import './TextForm.css'

export default function TextForm(props) {

    const [text,setText] = useState('');

    const handleupclick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success")
    }
    const handlelowclick = ()=>{
        let newText2 = text.toLowerCase();
        setText(newText2);
        props.showAlert("Converted to LowerCase","success")

    }

    const handleclearclick = () => {
        let newText3 = '';
        setText(newText3);
        props.showAlert("Text Cleared","success")

    }

    const handleonchange = (event)=>{
        setText(event.target.value);

    }

    const handleCopy = () => {
      var text = document.getElementById("textArea");
      text.select();
      text.setSelectionRange(0, 9999);
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to clipboard","success");
    }

    const handleRemoveSpaces = () =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Removed extra spaces","success");

    }


    const [myStyle, setMyStyle] = useState({
        color: '#222222',
        backgroundColor: 'white'
      })
    
    const [btnText, setBtnText] = useState("Dark Mode")

      const toggleMode = () =>{
        if(myStyle.color === "#222222"){
            setMyStyle({
              color: "white",
              backgroundColor: "#222222"
            })
            setBtnText("Light Mode")
          }
          else
          {
            if(myStyle.color === "white"){
              setMyStyle({
                color: "#222222",
                backgroundColor: "white"
              })
    
          }
          setBtnText("Dark Mode")
    
        }
      }
     
  return (
    <div>
    <h1>{props.heading} </h1>
    <div className="mb-3">
        <textarea style={myStyle} className="form-control" placeholder='Enter your text here' value={text} onChange={handleonchange} id="textArea" rows="10"></textarea>
    </div>
    <button className='btn btn-primary' onClick={handleupclick} >Uppercase </button>
    <button className='btn btn-primary' onClick={handlelowclick} >Lowercase </button>
    <button className='btn btn-primary' onClick={handleclearclick} >Clear </button>
    <button className='btn btn-primary' onClick={handleCopy} >Copy </button>
    <button className='btn btn-primary' onClick={handleRemoveSpaces} >Remove Spaces </button>
    <button className='btn ' id='modee' onClick={toggleMode} >{btnText} </button>
    <p></p>
    <p>{text.split(" ").length-1} words and {text.length}  characters</p>
    <p>{0.008 * text.split(" ").length} Minutes to read </p>
    </div>
  )
}

