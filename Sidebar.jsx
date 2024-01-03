import React from 'react'
import "./sidebar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRss , faComments ,faVideo,faBookmark,faQuestionCircle,faCalendar,faGraduationCap,faBriefcase } from '@fortawesome/free-solid-svg-icons';
import CloseFriend from '../closeFriend/CloseFriend';
import { Users } from "../../dummyData";
function sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <ul className='sidebarList'>
          <li className='sidebarListItem'>
          <FontAwesomeIcon icon={faRss} className='sidebarIcon' />
          <span className='sidebarListItemTxt'>Feed</span>
          </li>
          <li className='sidebarListItem'>
          <FontAwesomeIcon icon={faComments} className='sidebarIcon' />
          <span className='sidebarListItemTxt'>Chats</span>
          </li>
          <li className='sidebarListItem'>
          <FontAwesomeIcon icon={faVideo}  className='sidebarIcon'/>
          <span className='sidebarListItemTxt'>Video</span>
          </li>
          <li className='sidebarListItem'>
          <FontAwesomeIcon icon={faBookmark}  className='sidebarIcon'/>
          <span className='sidebarListItemTxt'>Bookmark</span>
          </li>
          <li className='sidebarListItem'>
          <FontAwesomeIcon icon={faQuestionCircle}  className='sidebarIcon'/>
          <span className='sidebarListItemTxt'>QuestionCircle</span>
          </li>
          <li className='sidebarListItem'>
          <FontAwesomeIcon icon={faCalendar}  className='sidebarIcon'/>
          <span className='sidebarListItemTxt'>Calendar</span>
          </li>
          <li className='sidebarListItem'>
          <FontAwesomeIcon icon={faGraduationCap}  className='sidebarIcon'/>
          <span className='sidebarListItemTxt'>GraduationCap</span>
          </li>
          <li className='sidebarListItem'>
          <FontAwesomeIcon icon={faBriefcase}  className='sidebarIcon'/>
          <span className='sidebarListItemTxt'>jobs</span>
          </li>
        </ul>
        <button className='sidebarButton'> Show more</button>
        <hr className='sidebarHr'/>
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default sidebar