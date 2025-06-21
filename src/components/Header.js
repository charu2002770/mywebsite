import { Bars3Icon } from '@heroicons/react/24/solid' 
import { useState } from 'react';
export default function Header() {
   const [toggleMenu, setTogglemenu] =useState(false)
    return (
        <header className="flex justify-between px-5 py-5 bg-secondary">
            <h1 className="font-bold text-white">CHARU<span className='text-pink-500'>LATHA</span></h1>
            <nav className="hidden md:block">
                <ul className="flex text-white">
                    <li className='hover:text-pink-600  font-bold'><a href="#home">Home</a></li>
                    <li  className='hover:text-green-600  font-bold'><a href="#about">About</a></li>
                    <li  className='hover:text-red-600  font-bold'><a href="#project">Projects</a></li>
                    <li  className='hover:text-yellow-600  font-bold'><a href="#resume">Resume</a></li>
                    <li  className='hover:text-blue-600  font-bold'><a href="#skills">Skills</a></li>
                    <li  className='hover:text-orange-600  font-bold'><a href="#Internship">Internship</a></li>
                    <li  className='hover:text-purple-600  font-bold'><a href="#contact">Contact</a></li>
                    
                </ul>
            </nav>
            {/* for mobile view bars */}
             {toggleMenu && <nav className="block md:hidden ">
                <ul onClick={()=> setTogglemenu(!toggleMenu)} className="flex flex-col font-bold text-pink-600 mobile-nav mt-5">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#project">Projects</a></li>
                    <li><a href="#resume">Resume</a></li>
                    <li><a href="#skills">Skills</a></li>
                     <li><a href="#Internship">Internship</a></li>
                     <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>}
            {/* md mobile device */}
            <button onClick={()=> setTogglemenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-white h-5'/></button>
        </header>
    );
}