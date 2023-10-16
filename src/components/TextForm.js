import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        //console.log("Uppercase was clicked");
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success");
    }

    const handleLoClick = () => {
        //console.log("Lowercas1 was clicked");
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success");
    }

    const handleClearClick = () => {
        //console.log("Lowercas1 was clicked");
        let newText= '';
        setText(newText);
        props.showAlert("Text Cleared", "success");
    }

    const handleOnChange = (event) => {
        //console.log("On change");
        setText(event.target.value);
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard", "success");
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[  ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed", "success");
    }

    const [text, setText] = useState('');

    //text = "new text"; //Wrong way to change the sate
    //setText("new text"); //correct way to change the state

    return (
        <>
            <div className="Container" style={{color: props.mode === 'dark'?'white':'#042743'}}>
                <h1>{props.heading}</h1>   
                <div className="mb-3">                    
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>              
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Space</button>
            </div>

            <div className="Container my-3" style={{color: props.mode === 'dark'?'white':'#042743'}}>
                <h2>Your text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0 ? text : "Enter something in the textbox above to preview here"}</p>
            </div>
        </>
       
        
    )
}
