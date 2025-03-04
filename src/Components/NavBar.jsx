import React from 'react'
import { useState } from "react";
import {MdMenuOpen} from "react-icons/md"
import {Link} from 'react-router-dom'
import {links} from './NavLink'
import SideNav from './SideNav';
import {AiOutlineLeft,AiOutlineRight} from "react-icons/ai";
import SideNav2 from './SideNav2';
import DropdownButton from './DropdownButton';
import DropdownButton2 from './DropdownButton2';
 const NavBar = () => {
    const [nav,setNav]= useState(false)
    const [nav2,setNav2]= useState(false)
    const malayalam ="മലയാളം"
    
  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-black ' >
        <div onClick={()=>setNav(!nav)} className=' cursor-pointer pr-4 z-20 text-gray-500 font-mal'>
            {nav ? <AiOutlineLeft size={30}/>:malayalam}
        </div>
       
        <div className='hidden md:flex'>
        <ul className='hidden md:flex'>
            {links.map(({link,path,index}) =>(
         <li key={index} className={`px-4 hover:rounded hover:bg-tb hover:text-white cursor-pointer capitalize font-medium  hover:scale-105 duration-200 `}><Link to={path} smooth duration={500}>{link}</Link></li>
            ))}
        </ul>
      <DropdownButton/>
      <DropdownButton2/>
        </div>
        
        
        <div onClick={()=>setNav2(!nav2)} className='md:hidden cursor-pointer pr-4 z-20 text-gray-500'>
            {nav2 ? <AiOutlineRight size={30}/> :<MdMenuOpen size={30}/>}
        </div>
        {
            nav2 && (<SideNav2 setNav2={setNav2}/>)
            }
            {
            nav && (<SideNav setNav={setNav}/>)
            }
           

    </div>
  )
}

export default NavBar