import React, {useState} from 'react'

export default function Darkbtn() {

    const [myStyle, setMyStyle] = useState({
        color :'white',
        backgroundColor: 'black'

    })

    const [btntext, setbtnText] = useState("enable light mode")

    const toggleStyle =()=>{
        if(myStyle.color == 'white'){
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setbtnText("enable dark mode")
        }
        else{
            setMyStyle({
                color: 'white',
                backgroundColor: 'black'
            })
            setbtnText("enable light mode");

        }
    }
  return (
    <div className='container' style={myStyle}>
        <div className="about">about</div>

        <button onClick={toggleStyle} className="btn">{btntext}</button>
    </div>
  )
}
