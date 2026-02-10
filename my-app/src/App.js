import React, {useState} from 'react'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'


 function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2c2b2b";
      document.body.style.color = "white";  
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
            document.body.style.color = "Black";  

    }
  };
  return (
    <>
    <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode} />
    <div className="container my-5">
    <TextForm heading="Please enter text below to analyze" mode={mode}/>
    </div>
    </>
  )
}
export default App
