import React, { useEffect, useRef } from 'react';
import { links2 } from './NavLink';
import { Link } from 'react-router-dom';

const SideNav = ({ setNav }) => {
  const sideNavRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sideNavRef.current && !sideNavRef.current.contains(event.target)) {
        setNav(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setNav]); 
  return (
    <div
      ref={sideNavRef}
      className="flex flex-col justify-center items-center absolute top-0 left-0 w-80 h-screen bg-white z-10 text-black ease-in"
    >
      <ul className="flex flex-col absolute w-60 top-20 ease-in">
        {links2.map(({ id, link, path }) => (
          <li
            key={id}
            className="flex items-center capitalize p-2 text-base font-mal font-normal text-black hover:scale-105 hover:bg-tb hover:rounded hover:text-white duration-200"
            data-aos="fade-right"
          >
            <Link onClick={() => setNav(false)} to={path} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-9"></div>
    </div>
  );
};
export default SideNav;