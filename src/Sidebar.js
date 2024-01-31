import React from 'react';
import 
{ BsGrid1X2Fill, BsPersonFillAdd,BsFillGearFill,BsPersonFill}
 from 'react-icons/bs';
 import 
{ FaMap,FaCalendarAlt,FaIndustry}
 from 'react-icons/fa';

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                WELCOME
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>
                         
        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPersonFill className='icon'/> Login
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPersonFillAdd className='icon'/> Register
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <FaMap className='icon'/> Region
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <FaCalendarAlt className='icon'/> Year
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <FaIndustry className='icon'/> Sector
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGearFill className='icon'/> Setting
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar;