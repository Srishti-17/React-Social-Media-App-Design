import React from 'react'
import "./online.css"
function Online({user}) {
  return (
    <li className="rightbarFriend">
        <div className="rightbarProfileImgContainer">
          <img className="rightbarProfileImg" src={user.profilePicture} ></img>
        <span className='rightbarOnline'></span> 
        </div>
        <span className='rightbarUsername'>{user.username}</span>
      </li>
  )
}

export default Online