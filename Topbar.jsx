import React from 'react';
import './topbar.css';
// import { Search } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faSearch,faComment,faBell } from '@fortawesome/free-solid-svg-icons';

function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Let#Unite</span>
      </div>

      <div className="topbarCenter">
        <div className="searchbar">
        <FontAwesomeIcon icon={faSearch}  className='searchIcon'/>
          <input placeholder="Search for friend, post or video" className='searchInput'></input>
        </div>
      </div>
      
      <div className="topbarRight">
        <div className="topbarLink">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <FontAwesomeIcon icon={faUser} />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <FontAwesomeIcon icon={faComment} />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <FontAwesomeIcon icon={faBell} />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="https://images.pexels.com/photos/672444/pexels-photo-672444.jpeg?cs=srgb&dl=pexels-min-an-672444.jpg&fm=jpg"  alt="" className='topbarImg'></img>
      </div>
    </div>
  );
}

export default Topbar;