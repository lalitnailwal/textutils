import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>   
      {/* <NavBar /> */}
      <NavBar title="TextUtils" aboutText = "About"/>
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below"/>
      </div>      
    </>
  );
}

export default App;
