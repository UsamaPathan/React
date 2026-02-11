import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpCase = () => {
    if (text.trim().length === 0) {
      props.showAlert("Please enter some text first", "warning");
      return;
    } 

    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text converted to uppercase", "success");
  };

 const handleLowCase = () => {
  if (text.trim().length === 0) {
    props.showAlert("Please enter some text first", "warning");
    return;
  }

  let newText = text.toLowerCase();
  setText(newText);
  props.showAlert("Text converted to lowercase", "success");
};
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleClearText = (event) => {
    if (text.trim().length === 0) {
      props.showAlert("Text is already empty", "warning");
      return;
    }
    setText("");
    props.showAlert("Text cleared", "success");
  };
  const handleDownload = () => {
    if (text.trim().length === 0) {
      props.showAlert("Please enter some text to download", "warning");
      return;
    }
    const element = document.createElement("a");
    if (text.length === 0) {
      props.showAlert("Please enter some text to download", "warning");
    } else {
      const file = new Blob([text], { type: "text/plain" });
      element.href = URL.createObjectURL(file);
      element.download = "myTextFile.txt";
      document.body.appendChild(element);
      element.click();
        props.showAlert("Text file downloaded successfully", "success");
    }
    
  };
 
  const handleCopy =() => {
    if (text.trim().length === 0) {
      props.showAlert("Please enter some text to copy", "warning");
      return;
    }
      navigator.clipboard.writeText(text);
        props.showAlert("Text copied to clipboard", "success");
    }

    const handleExtraSpace = ()=> {
    if (text.trim().length === 0) {
      props.showAlert("Please enter some text first", "warning");
      return;
    }
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "success");
    }

  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1> {props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            value={text}
            onChange={handleOnChange}
            rows="10"
            style = {{backgroundColor: props.mode === "dark" ? "#2c2b2b" : props.mode === "green" ? "rgba(172, 233, 172, 0.73)" : "white", color: props.mode === "dark" ? "white" : props.mode === "green" ? "black" : "black"}}  
          ></textarea>
          <button
            className="btn btn-outline-primary mt-3 ms-1"
            onClick={handleUpCase}
          >
            Convert to Upper Case
          </button>
          <button
            className="btn btn-outline-primary mt-3 ms-1"
            onClick={handleLowCase}
          >
            Convert to Lower Case
          </button>
          <button
            className="btn btn-outline-primary mt-3 ms-1"
            onClick={handleCopy}
          >
            Copy Text
          </button>
          <button
            className="btn btn-outline-primary mt-3 ms-1"
            onClick={handleExtraSpace}
          >
            Remove Extra Space
          </button>
          <button
            className="btn btn-outline-success mx-2 mt-3"
            onClick={handleDownload}
          >
            Download Text <i className="bi bi-download"></i>{" "}
          </button>
          <button
            className="btn btn-outline-danger mt-3 ms-1"
            onClick={handleClearText}
          >
            Clear Text
          </button>
          
        </div>
      </div>
      <div className="container">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length - 1} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h3>preview</h3>
        <p>{text.length>0?text:"Enter something in the Box to Preview"}</p>
      </div>
    </>
  );
}
