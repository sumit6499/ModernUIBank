import React, { useState } from 'react'
import {logo,menu,close} from '../assets'
import {navLinks} from '../constants'
const Navbar = () => {
  const [toggle,setToggle]=useState(false);
  return (
   <nav className='w-full flex justify-between navbar py-6 items-center text-secondary'>
    <img src={logo} alt="HooBank" className='max-w-[124px] max-h-[32px]' />
    <ul className='list-none sm:flex justify-end items-end flex-1 text-secondary sm:space-x-10 hidden'>
       {navLinks.map((nav,index)=>(
        <li key={nav.id}>
          <a href={`${nav.id}`} className={'font-poppins font-normal cursor-pointer text-white text-[16px] hover:text-secondary'} >{nav.title}</a>
        </li>
       ))}
    </ul>
        <div className="sm:hidden ">
          <img src={toggle? close:menu} alt="" className='w-[28px] h-[28px] object-contain' onClick={()=>{
            setToggle((prev)=>(!prev));
             }}/>
          <div className={`${toggle ? 'flex' :'hidden'} p-6 bg-black-gradient absolute top-20 right-0 my-2 min-w-[140px] rounded-xl sidebar `}>
            <ul className='list-none flex  flex-col justify-center gap-2'>
              {navLinks.map((nav,index)=>(
                <li key={nav.id}>
                  <a href={`${nav.id}`} className={'font-poppins font-normal cursor-pointer text-white hover:text-secondary  text-[16px]'} >{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
   </nav>
  )
}

export default Navbar
