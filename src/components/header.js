import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { BsMic } from 'react-icons/bs';
import { AiOutlineSetting } from 'react-icons/ai';
import worldmap from '../image/worldcovidmap.png';

function Header() {
  const currentlocation = useLocation();
  const backHome = currentlocation.pathname.includes('country') ? <MdKeyboardArrowLeft /> : '';

  return (
    <header>
      <div>
        <NavLink exact="true" to={{ pathname: '/' }}>
          {backHome}
        </NavLink>
        <h1>Countries has highest covid cases</h1>
        <div>
          <BsMic />
          <AiOutlineSetting />
        </div>
      </div>
      <div>
        <img src={worldmap} alt="world map" />
      </div>
    </header>
  );
}

export default Header;
