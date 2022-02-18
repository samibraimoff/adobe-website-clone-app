import React from 'react';
import './header.scss';
import { FiSearch } from 'react-icons/fi';
import { SiAdobe } from 'react-icons/si';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

const Header = () => {
  return (
    <div className='container'>
      <header>
        <div className='headerLeft'>
          <div className='logo'>
            <SiAdobe className='logoIcon' />
            <span>Adobe</span>
          </div>

          <ul>
            <li>
              <span>Creativity&Design</span>
              <MdKeyboardArrowDown className='headerIcon' />
            </li>
            <li>
              <span>PDF&E-signatures</span>
              <MdKeyboardArrowDown className='headerIcon' />
            </li>
            <li>
              <span>Marketing&Commerce</span>
              <MdKeyboardArrowDown className='headerIcon' />
            </li>
            <li>
              <span>Help&Support</span>
              <MdKeyboardArrowDown className='headerIcon' />
            </li>
          </ul>
        </div>

        <div className='headerRight'>
          <FiSearch className='searchIcon' />
          <span>Sign In</span>
        </div>
      </header>
    </div>
  );
};

export default Header;
