import React from 'react'

function StartButton (props) {
  return (
    <div className= 'Button'>
    <button onClick ={props.handleClick}> Start Button </button>
    </div>
  )
}

export default StartButton