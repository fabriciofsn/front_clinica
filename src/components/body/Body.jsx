import React from 'react';
import './body.css';
import { FaInfoCircle } from "react-icons/fa";
import { FaHospitalAlt } from "react-icons/fa";
import Button from '../buttons/Button';

const Body = () => {
  return (
    <div className='wrapperBody'>
    <div className='bodydiv'>
      <p>{<FaInfoCircle size={30} color='#005767'/>} <span>Painel Administrativo</span></p>
    </div>
    <div className="iconmedical">
      <FaHospitalAlt size={100} color='#005767'/>
    </div>
     <div className="buttons">
        <Button name="Agendar consulta" color='#0d6efd'/>
        <Button name="Consultas agendadas" color='#198754'/>
        <Button name="Cancelar consulta" color='#dc3545'/>
      </div>
    </div>
  )
}

export default Body