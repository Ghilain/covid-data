import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { BsMic } from 'react-icons/bs';
import { AiOutlineSetting } from 'react-icons/ai';
import './component.css';

function Header() {
  const currentlocation = useLocation();
  const backHome = currentlocation.pathname.includes('country') ? <MdKeyboardArrowLeft className="backhome" /> : '';

  return (
    <header>
      <div className="divtitle">
        <NavLink exact="true" to={{ pathname: '/' }}>
          {backHome}
        </NavLink>
        <h1 className="title">Countries has highest covid cases</h1>
        <div>
          <BsMic className="micicon" />
          <AiOutlineSetting className="settingicon" />
        </div>
      </div>
    </header>
  );
}

export default Header;
