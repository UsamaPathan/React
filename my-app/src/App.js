import React from 'react'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'


 function App() {
  return (
    <>
    <Navbar/>
    <div className="container my-5">
    <TextForm heading="Please enter text below to analyze"/>
    </div>
    </>
  )
}
export default App
