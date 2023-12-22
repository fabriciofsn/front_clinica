import React from 'react';
import './aside.css';
import { FaBriefcaseMedical } from "react-icons/fa6";
import { FaUserDoctor } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa6";
import { RiComputerFill } from "react-icons/ri";
import Body from '../body/Body';
import IconAside from '../icon/IconAside';
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { GiRemedy } from "react-icons/gi";




const Aside = () => {
  return (
  <div className='wrapper'> 
    <div className='aside'>
      <div className="icon">
      <FaBriefcaseMedical size={50} color='#d9d9d9'/>
      </div>

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
  </div>
  )
}

export default Aside