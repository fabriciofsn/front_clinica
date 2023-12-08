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
        <IconAside icon={<FaUserDoctor color='white' size={20}/>} name="Médicos"/>
      </li>
      <li>
        <IconAside icon={<FaUser color='white' size={20}/>} name="Pacientes"/>
      </li>
      <li>
        <IconAside icon={<GiRemedy color='white' size={20}/>} name="Farmácia"/>
      </li>
      <li>
        <IconAside icon={<RiMoneyDollarCircleFill color='white' size={20}/>} name="Pagamentos"/>
      </li>
    </ul>

    </div>
  
    <Body />
  </div>
  )
}

export default Aside