import React from 'react';
import './header.css';
import IconAside from '../icon/IconAside';
import { FaUserDoctor } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { RiComputerFill } from "react-icons/ri";

const Header = () => {
  return (
    <header>
      <div className="container">
        <h1>Home Clinic</h1>
    <ul>
      <li>
        <IconAside href="/" icon={<RiComputerFill color='white' size={20}/>} name="Administrativo"/>
      </li>
      <li>
        <IconAside href="/medicos" icon={<FaUserDoctor color='white' size={20}/>} name="Médicos"/>
      </li>
      <li>
        <IconAside href="/pacientes" icon={<FaUser color='white' size={20}/>} name="Pacientes"/>
      </li>
    </ul>
      </div>
    </header>
  )
}

export default Header