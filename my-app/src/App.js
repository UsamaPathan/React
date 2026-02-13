import React, {useState} from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import TextForm from './components/TextForm'
import Alert from './components/Alert'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);



 function App() {
  const [mode, setMode] = useState("light");

  const [alert, setalert] = useState(null);

  const showAlert =(message, type) =>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1000);
  }
  
  const toggleMode = () => {
  if (mode === "green") {
    showAlert("Please disable Green mode first", "warning");
    return;
  }

  if (mode === "light") {
    setMode("dark");
    document.body.style.backgroundColor = "#2c2b2b";
    document.body.style.color = "white";
    showAlert("Dark mode has been enabled", "success");
  } else {
    setMode("light");
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    showAlert("Light mode has been enabled", "success");
  }
};

   const toggleMode1 = () => {
  if (mode === "dark") {
    showAlert("Please disable Dark mode first", "warning");
    return;
  }

  if (mode === "light") {
    setMode("green");
    document.body.style.backgroundColor = "rgba(172, 233, 172, 0.73)";
    document.body.style.color = "black";
    showAlert("Green mode has been enabled", "success");
  } else {
    setMode("light");
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    showAlert("Light mode has been enabled", "success");
  }
};


  return (
    <>
   <Router>
  <Navbar 
    title="TextUtils" 
    about="About" 
    mode={mode} 
    toggleMode={toggleMode}  
    toggleMode1={toggleMode1} 
  />

  <Alert alert={alert} />

  <Routes>

    <Route 
      path="/about" 
      element={<About />} 
    />

    <Route 
      path="/" 
      element={
        <div className="container my-5">
          <TextForm 
            heading="Please enter text below to analyze" 
            mode={mode} 
            showAlert={showAlert} 
            toggleMode1={toggleMode1}
          />
        </div>
      } 
    />

  </Routes>

</Router>
    </>
  )
}
export default App
