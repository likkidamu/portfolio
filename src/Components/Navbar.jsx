import React, { useState, useContext,useEffect } from 'react';
import './Navbar.css';
import Toggle from './Toggle';
import { Link } from 'react-scroll';
import { themeContext } from '../Context';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => setSidebar(!sidebar);

  const theme = useContext(themeContext);
  const darkTheme = theme.state.darkmode;

  const closeSidebar = () => setSidebar(false); // Function to close sidebar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setSidebar(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className='nav-wrapper' id='Navbar'>
      <div className='nav-left'>
        <div className='n-name'>Damodhar</div>
        <Toggle />
      </div>

      {/* Hamburger Menu */}
      <div className='hamburger-menu' onClick={toggleSidebar}>
        {!(sidebar) && <FaBars size={24} />}
      </div>

      {/* Sidebar and Overlay */}
      {sidebar && <div className='overlay' onClick={closeSidebar}></div>}
      <div className={sidebar ? 'side_bar' : 'nav-right'}>
      <div className='hamburger-menu' onClick={toggleSidebar}>
      {(sidebar) && <FaTimes size={24} />}
      </div>
        <ul className='nav-list' style={{ listStyleType: 'none' }}>
          <Link
            style={{ color: darkTheme ? 'white' : 'black' }}
            spy={true}
            to='Navbar'
            smooth={true}
            onClick={closeSidebar}
          >
            <li>Home</li>
          </Link>
          <Link
            style={{ color: darkTheme ? 'white' : 'black' }}
            spy={true}
            to='Services'
            smooth={true}
            onClick={closeSidebar}
          >
            <li>Services</li>
          </Link>
          <Link
            style={{ color: darkTheme ? 'white' : 'black' }}
            spy={true}
            to='Experience'
            smooth={true}
            onClick={closeSidebar}
          >
            <li>Experience</li>
          </Link>
          <Link
            style={{ color: darkTheme ? 'white' : 'black' }}
            spy={true}
            to='Projects'
            smooth={true}
            onClick={closeSidebar}
          >
            <li>Projects</li>
          </Link>
          <Link
            style={{ color: darkTheme ? 'white' : 'black' }}
            spy={true}
            to='Contact'
            smooth={true}
            onClick={closeSidebar}
          >
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
