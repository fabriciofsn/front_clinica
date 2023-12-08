import React from 'react'
import './button.css';

const Button = (props) => {
  return (
    <button style={{backgroundColor: props.color}}>{props.name}</button>
  )
}

export default Button