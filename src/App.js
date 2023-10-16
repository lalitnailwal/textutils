import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';


function App() {
  const [mode, setMode] =  useState('light'); //whe ther dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
      setAlert({
        msg: message,
        type: type
      })

      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled", "success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
    }
  }

  return (
    <>   
      {/* <NavBar /> */}
      <NavBar title="TextUtils" aboutText = "About" mode = {mode} toggleMode={toggleMode}/>
      <strong><Alert alert={alert}/></strong>
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode = {mode}/>
        {/* <About></About> */}
      </div>      
    </>
  );
}

export default App;
