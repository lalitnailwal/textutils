import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


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
    <Router>
      {/* <NavBar /> */}
      <NavBar title="TextUtils" mode = {mode} toggleMode={toggleMode}/>
      <strong><Alert alert={alert}/></strong>
      <div className="container my-3">

        <Routes>
          <Route exact path="/about" element={<About mode = {mode} />} />
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils- Word Counter, Character Counter, Remove Extra Spaces" mode = {mode}/>} />
        </Routes>        
      </div>   
    </Router>   
    </>
  );
}

export default App;
