import React, {useState} from 'react'


export default function(props) {
   
    const handleUpCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText]= useState('Enter text here');
  return (
    <div>
        <h1> {props.heading} </h1>
<div className="mb-3">
  <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} rows="10"></textarea>
  <div className="btn btn-outline-success mt-3" onClick={handleUpCase} >Convert to Upper Case</div>
</div>
    </div>
  )
}