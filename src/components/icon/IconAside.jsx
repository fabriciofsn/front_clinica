import React from 'react'
import './iconAside.css';

const IconAside = (props) => {
  return (
    <div className='iconaside'>
      <a href={props.href}>
        <button>{props.icon}<span>{props.name}</span></button>
      </a>
    </div>
  )
}

export default IconAside