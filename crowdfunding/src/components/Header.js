import React, {useState} from 'react'
import logo from "../images/logo.svg"
import hamburger from "../images/icon-hamburger.svg"
import close from "../images/icon-close-menu.svg"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <>
    <header className="absolute flex items-center justify-between px-5 py-8 w-full">
        <div>
            <img src= {logo} alt="logo_icon"/>
        </div>
        {isOpen && (
            <nav className="absolute w-3/4 ml-8 mt-56 ">
            <ul className= "bg-white shadow-2xl rounded-xl px-5 py-5">
                <li className="py-2 border-b border-gray-200"><a href='#' >About</a></li>
                <li className="py-2 border-b border-gray-200"><a href='#' >Discover</a></li>
                <li className="py-2"><a href='#' >Get Started</a></li>
            </ul>
        </nav>
        )};
        <div>
            {isOpen ? (
                <img src={close} alt="close_icon" className="w-6 cursor-pointer" onClick={() => setIsOpen(!isOpen)}/> 
            ) : (
                <img src= {hamburger} alt="hamburger_icon" className="w-6 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}/>
            )}
        </div>
    </header>
    </>
  )
}

export default Header;