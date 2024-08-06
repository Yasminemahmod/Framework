import React from 'react'
import { Link, NavLink } from 'react-router-dom'


export default function NavBar() {
  function dropDown() {
    document.querySelector(".links").classList.toggle("h-0")
    document.querySelector(".links").classList.toggle("h-32")
  }




  return <>
    <div className="nav z-10 text-white py-9 fixed top-0 start-0 end-0">
      <div className="container flex justify-between items-center flex-wrap">
        <div className="logo w-4/5 md:w-1/2">
          <Link to=""><h2 className='text-3xl font-bold'>START FRAMEWORK</h2></Link>
        </div>
        <div className="linkBars text-end w-1/5  block md:hidden ">
            <i onClick={dropDown} class="fa-solid fa-bars text-3xl hover:cursor-pointer"></i>
        </div>
        <div className="links h-0 duration-500 overflow-hidden md:overflow-visible md:w-1/3 md:h-auto">
          <ul className='flex flex-col w-100 items-start pt-5 pb-0 justify-between md:items-center md:py-0 md:flex md:flex-row'>
            <li className='font-bold mb-2 md:mb-0'><NavLink to='about'>ABOUT</NavLink></li>
            <li className='font-bold mb-2 md:mb-0'><NavLink to="portfolio">PORTFOLIO</NavLink></li>
            <li className='font-bold'><NavLink to="contact">CONTACT</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  </>

}
