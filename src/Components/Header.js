
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState, useEffect, useRef } from 'react';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import { Link } from 'react-router-dom';



export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleIsOpen = () => setIsOpen((prev) => !prev);
    const [darkMode, setDarkMode] = useState(false);
  
    useEffect(() => {
      const isDarkMode = localStorage.getItem('darkMode') === 'true';
      setDarkMode(isDarkMode);
    }, []);
  
    useEffect(() => {
      document.documentElement.classList.toggle('dark', darkMode);
      localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);
  
    const toggleDarkMode = () => {
      setDarkMode((prevMode) => !prevMode);
      
    };
  
    

    return (
        <div>
            <header className='header mt-1 lg:mx-24'>
  <div className='header wrapper flex items-center justify-between px-2 sm:flex sm:justify-between'>
  <div className="hidden md:flex " >
    <a href='#' className='flex hover:bg-gray-500 py-1 ml-4 lg:mx-24 lg:mr-16 font-poppins'>Best</a>
    <a href='#' className='block hover:bg-gray-500 py-1  ml-4 lg:ml-16 font-poppins '>Social</a>
    </div>
    <div className='left elements'>
    <div className={`hamburger menu  sm:hidden ${isOpen ? "hidden" : "block"}`}>
    <MenuIcon onClick={toggleIsOpen} className={`block hover:text-gray-500 dark:focus:text-white `}/>
  
    </div>

    

   
      </div>
      <div className='flex flex-col w-full'>
        <div className='flex items-center justify-center px-4 sm:flex sm:justify-between'>
        <div className={`hamburger menu sm:hidden ${isOpen ? "block" : "hidden"}`}>
          <CloseIcon style={{ fontSize: '1.5rem' }} onClick={toggleIsOpen} className={`block hover:text-gray-500 dark:focus:text-white `}/>

    </div>
    <div className='center content block lg:ml-40 lg:px-62 md:px-10 lg:mr-0 lg:pr-0 lg:pl-14 mx-4 px-2  text-blue-1 font-futura text-4xl font-bold'>
      <Link to='/'>The Lazy Chefs</Link></div>
    <div className="hidden md:flex " >
    <a href='#' className='block hover:bg-gray-500  ml-4 lg:ml-0 font-poppins lg:mr-10'>Recipes</a>
    <a href='#' className='block  hover:bg-gray-500  mx-4 lg:ml-16 font-poppins lg:mr-0'>Social</a>
    </div>
    <div className='right elements'>
        <div  className={`right elements lg:mr-4 ${isOpen ? "hidden" : "block"}`}>
          <Link to='/search'> <SearchIcon  className='right elements lg:mr-0'/></Link>
     
      <button onClick={toggleDarkMode}>
      <Brightness6Icon className=' block right elements lg:mr-4 dark:text-white' />
      </button></div>
                  {/* <div ref={searchRef}><input className={`SearchBar hidden shadow ${isSearchOpen ? "block" : "hidden"}`} placeholder='Search for Recipes'></input></div> */}

      
      </div>
    </div>
    <div className={` links   ${isOpen ? "block" : "hidden"}`} >
      
    <a href='#' className='block bg-red-1 hover:bg-gray-500 mx-0 py-1'>All Recipes</a>
    <a href='#' className='block bg-orange-1  hover:bg-gray-500 py-1 mt-1 sm:mt-0 sm:ml-4'>Social</a>
    <a href='#' className='block bg-blue-1 hover:bg-gray-500 py-1 mt-1 sm:mt-0 sm:ml-4'>About</a>
    </div>
    </div>
 
    </div>
  </header>
  <div className="relative flex py-2 items-center">
  <span className="flex-shrink mx-4 lg:mx-24 text-black"></span>
    <div className="flex-grow border-t border-gold-1"></div>
   
    <div className="flex-grow border-t border-gold-1"></div>
     <span className="flex-shrink mx-4 lg:mx-24 text-black"></span>
     </div>



        </div>
    )




}