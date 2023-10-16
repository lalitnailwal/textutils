import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        //console.log("Uppercase was clicked");
        let newText= text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        //console.log("Lowercas1 was clicked");
        let newText= text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        //console.log("On change");
        setText(event.target.value);
    }    

    const [text, setText] = useState('');

    //text = "new text"; //Wrong way to change the sate
    //setText("new text"); //correct way to change the state

    return (
        <>
            <div className="Container">
                <h1>{props.heading}</h1>   
                <div className="mb-3">                    
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            </div>

            <div className="Container my-3">
                <h2>Your text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
       
        
    )
}
