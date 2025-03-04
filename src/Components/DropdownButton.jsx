import React from 'react'
import { useState } from 'react';
import {Link} from 'react-router-dom'

const DropdownButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative inline-block">
      <button
        className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 rounded inline-flex items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span  className="hover:bg-tb hover:rounded hover:text-white">Foundation</span>
        <svg
          className="fill-current h-4 w-4 ml-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M14.707 7.293a1 1 0 0 0-1.414-1.414L10 9.586l-3.293-3.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 0-1.414z" />
        </svg>
      </button>
      {isOpen && (
        <ul className="absolute text-gray-700 pt-1 z-10">
          <li onClick={() => setIsOpen(!isOpen)}>
            <Link to="/about-us"
              className="rounded-t bg-gray-200 hover:bg-tb py-2 px-4 block whitespace-no-wrap hover:text-white bg-white"
              
            >
              About Us
            </Link>
          </li>
          <li onClick={() => setIsOpen(!isOpen)}>
            <Link to="/programmes"
              className="rounded-t bg-gray-200 hover:bg-tb py-2 px-4 block whitespace-no-wrap hover:text-white  bg-white"
              
            >
              Programmes
            </Link>
          </li>
          
        </ul>
      )}
    </div>
  )
}

export default DropdownButton