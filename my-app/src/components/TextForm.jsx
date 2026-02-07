import React, {useState} from 'react'


export default function TextForm(props) {
   
    const handleUpCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
     const handleLowCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleClearText = (event) => {
        setText("");
    }
    const handleDownload = () =>{
      const element = document.createElement("a");
      if(text.length === 0){
        alert("Please enter some text to download");
      } else {
        const file = new Blob([text], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = "myTextFile.txt";
        document.body.appendChild(element);
        element.click();

      }

    }
    
    const [text, setText]= useState('');
  return (
    <>
    <div className="container">
        <h1> {props.heading} </h1>
<div className="mb-3">
  <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} rows="10"></textarea>
  <button className="btn btn-outline-primary mt-3 ms-1" onClick={handleUpCase} >Convert to Upper Case</button>
  <button className="btn btn-outline-primary mt-3 ms-1" onClick={handleLowCase} >Convert to Lower Case</button>
<button className="btn btn-outline-success mx-2 mt-3" onClick={handleDownload}>Download Text <i className="bi bi-download"></i> </button>
  <button className="btn btn-outline-danger mt-3 ms-1" onClick={handleClearText} >Clear Text</button>


</div>
    </div>
    <div className="container">
    <h2>Your text summary</h2>
    <p>{text.split(" ").length-1} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} minutes to read</p>
    <h3>preview</h3>
    <p>{text}</p>
    </div>
    </>
  )
}