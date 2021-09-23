import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    // const handleCpaClick = ()=>{
    //     let newText = text.toL();
    //     setText(newText);
    // }
    const handleOnChange = (event)=>{
        console.log('On Change');
        setText(event.target.value);
    }
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
    }
    
    const handleCopy=()=>{
        console.log("I am copy");
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(""))
    }

    const [text, setText] = useState('');
    // setText = (new.text);
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
         <h1>{props.heading}</h1>   
         <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="9"
            style={{backgroundColor: props.mode==='dark'?'grey':'white', 
            color: props.mode==='dark'?'white':'#042743'}}></textarea>
         </div>
         <button className="btn btn-primary mx-1" onClick={handleUpClick}>Uppercase</button>
         <button className="btn btn-primary mx-1" onClick={handleLoClick}>Lowercase</button>
         <button className="btn btn-primary mx-1" onClick={handleClearClick}>Reset</button>
         <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
         <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h3>Your Text Summray</h3>
            <p>Word Count:{text.split(" ").length} | Character Count:{text.length}</p>
            <p>{0.008 * text.split(" ").length} Minutes reads </p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    )
}
