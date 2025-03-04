import React, { useEffect, useRef } from 'react';
import { links } from './NavLink';
import { Link } from 'react-router-dom';
import DropdownButton from './DropdownButton';
import DropdownButton2 from './DropdownButton2';
const SideNav2 = ({ setNav2 }) => {
  const sideNavRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sideNavRef.current && !sideNavRef.current.contains(event.target)) {
        setNav2(false); 
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setNav2]); 
  return (
    <div
      ref={sideNavRef}
      className="flex flex-col justify-center items-center absolute top-0 right-0 w-80 h-screen text-black ease-in bg-white z-10"
    >
      <ul className="flex flex-col absolute w-60 top-20 ease-in">
        {links.map(({ id, link, path }) => (
          <li
            key={id}
            className="flex items-center capitalize p-2 text-base hover:bg-tb hover:rounded hover:text-white font-normal text-black"
          >
            <Link onClick={() => setNav2(false)} to={path} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-9">
        <DropdownButton />
        <DropdownButton2 />
      </div>
    </div>
  );
};
export default SideNav2;