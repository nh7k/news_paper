import React, {useState} from 'react'

export default function Error() {
  const handleUpClick= ()=>{
    console.log("upercase"+ text);
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleonChange =(e)=>{
    console.log("on change");
    setText(e.target.value)
  }

  const [text, setText] = useState('enter the nitish hacker');
  return (
    <div className="mb-3">
         <label for ="myBox" class ="form-label"></label>
         <textarea name="" id="" cols="30" rows="10" value={text} onChange={handleonChange}>
       
         </textarea>
         <button className="btn  " onClick={handleUpClick}>convert upercase</button>
      
        <div className="container">
          <h1>enter your text</h1>
          <p>{text.split(" ").length} word {text.length} character</p>
          <p>{0.008 * text.split("").length}</p>
        </div>
    </div>
  )
}
