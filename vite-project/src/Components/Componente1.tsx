import React, { useEffect, useRef, useState } from 'react';
import '../styles.css'
import ThemeManager from './theme-manager';
import { useTheme } from './theme-context';

const Componente1: React.FC = () => {

  const { theme } = useTheme();

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 1024;

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (menuRef.current) {
      menuRef.current.classList.toggle("hidden");
    }
  };

  return (

    <div className={` ${ theme === "dark" ? "" : "bg-[#151515] text-white"}`}>

      <header>
        <nav className="pt-5 ml-12 mr-12 px-4 lg:px-6 py-2.5">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="#" className="flex items-center">
              <img src="/Screenshot_1.png" className="h-auto" />
            </a>
            <div className="flex items-center lg:order-2">
              <a href="#" className=" font-bold text-black-800 hover:bg-red-50 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">Sign in</a>
              <a href="#" className=" font-bold border border-red-500 hover:bg-gray-50 text-red-500 font-medium py-2 px-8 rounded-full bg-transparent">Sign up</a>
              <button ref={buttonRef} data-collapse-toggle="mobile-menu-2" type="button" className="ml-3 inline-flex items-center p-2 ml-1 text-sm text-red-500 rounded-lg lg:hidden hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-200 " aria-controls="mobile-menu-2" aria-expanded="false" onClick={handleClick}>
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" fill="currentColor"
                  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" >
                  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 
                              2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 
                              10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1
                               1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </button>
              <ThemeManager></ThemeManager>
            </div>
            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:mt-0">
                <li>
                  <a href="#" className="block py-2 px-5 text-black-700  border-gray-100 hover:bg-red-50">About</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-5 text-black-700  border-gray-100 hover:bg-red-50">Features</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-5 text-black-700  border-gray-100 hover:bg-red-50">Pricing</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-5 text-black-700  border-gray-100 hover:bg-red-50">Testimonials</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-5 text-black-700  border-gray-100 hover:bg-red-50">Help</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>


      {width < breakpoint ? (
        <>
          <div
            ref={menuRef}
            id="mobile-menu-2"
            className="hidden">

            <div className='flex text-xl mx-auto justify-center pt-5'>
              <ul className="">
                <a href="#" className=" py-2 pr-4 pl-3   border-red-100 hover:bg-red-50">Company</a>
                <a href="#" className=" py-2 pr-4 pl-3  border-red-100 hover:bg-red-50">Marketplace</a>
                <a href="#" className=" py-2 pr-4 pl-3  border-red-100 hover:bg-red-50">Features</a>
                <a href="#" className=" py-2 pr-4 pl-3  border-red-100 hover:bg-red-50">Team</a>
                <a href="#" className=" py-2 pr-4 pl-3  border-red-100 hover:bg-red-50">Contact</a>
              </ul>

            </div>

          </div>
        </>
      ) : (
        <>

        </>
      )}




    </div>

  )
}

export default Componente1