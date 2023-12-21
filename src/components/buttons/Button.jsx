import React from 'react'
import './button.css';

const Button = (props) => {
  return (
   <a href={props.link}>
    <button style={{backgroundColor: props.color}}>{props.name}</button>
   </a> 
  )
}

export default Button
