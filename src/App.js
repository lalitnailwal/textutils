import './App.css';
import About from './components/About';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';


function App() {
  const [mode, setMode] =  useState('light'); //whe ther dark mode is enabled or not

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>   
      {/* <NavBar /> */}
      <NavBar title="TextUtils" aboutText = "About" mode = {mode} toggleMode={toggleMode}/>
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" mode = {mode}/>
        {/* <About></About> */}
      </div>      
    </>
  );
}

export default App;
