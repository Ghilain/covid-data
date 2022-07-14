import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { BsMic } from 'react-icons/bs';
import { AiOutlineSetting } from 'react-icons/ai';
import worldmap from '../image/worldcovidmap.png';

function NavBar() {
  const currentlocation = useLocation();
  const backHome = currentlocation.pathname.includes('country') ? <MdKeyboardArrowLeft /> : '';

  return (
    <nav>
      <div>
        <NavLink exact="true" to={{ pathname: '/' }}>
          {backHome}
        </NavLink>
        <h1>World highest covid cases</h1>
        <div>
          <BsMic />
          <AiOutlineSetting />
        </div>
      </div>
      <div>
        <img src={worldmap} alt="world map"/>
        <h1>
          COVID WORLD MAP
        </h1>
      </div>
    </nav>
  );
}

export default NavBar;
