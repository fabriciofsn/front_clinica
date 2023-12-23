import React, { useState } from 'react'
import "./popup.css";

const PopUp = (props) => {

  return (
    <div className='popup'style={{backgroundColor: props.color}}>
      <div>
      <div className='icon'>{props.icon} {props.message}</div>
      <div className='warn'><span>{props.warning}</span></div>
      <div className="x">
        <h4>X</h4>
      </div>
      </div>
    </div>
  )
}

export default PopUp