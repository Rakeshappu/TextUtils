import React,{useState} from 'react'

export default function TextForm(props) {

    const [text,setText] = useState('');

    const handleupclick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handlelowclick = ()=>{
        let newText2 = text.toLowerCase();
        setText(newText2);
    }

    const handleonchange = (event)=>{
        setText(event.target.value);
    }

  return (
    <div>
    <h1>{props.heading} </h1>
    <div className="mb-3">
        <textarea className="form-control" placeholder='Enter your text here' value={text} onChange={handleonchange} id="textArea" rows="10"></textarea>
    </div>
    <button className='btn btn-primary' onClick={handleupclick} >Uppercase </button>
    <button className='btn btn-primary' onClick={handlelowclick} >Lowercase </button>

    </div>
  )
}
