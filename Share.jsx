import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage,faTag, faSmile, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import "./share.css"
import { ClassSharp } from '@mui/icons-material';
function Share() {
  return (
    <div className='share'>
        <div className='shareWrapper'>
            <div className="shareTop">
                <img  className="shareProfileImg" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"></img>
           <input placeholder='whats in ur mind Safak?' className='shareInput'/>
            </div>
            <hr className='shareHr'></hr>
            <div className="shareBottom">
            <div className="shareOptions">
              <div className="shareOption">
            <FontAwesomeIcon style={{ color: 'tomato' }} className='shareIcon' icon={faImage} />
              <span className='shareOptionText'>Photo or video</span>
            </div>
            <div className="shareOption">
    <FontAwesomeIcon style={{ color: 'blue' }} icon={faTag} />
    <span className="shareOptionText">Tag</span>
</div>
            <div className="shareOption">
            <FontAwesomeIcon  style={{ color: 'green' }} className='shareIcon' icon={ faMapMarkerAlt } />
              <span className='shareOptionText'> faMapMarkerAlt </span>
            </div>
            <div className="shareOption">
            <FontAwesomeIcon style={{ color: 'goldenrod' }} className='shareIcon' icon={faSmile} />
              <span className='shareOptionText'>Feelings</span>
            </div>
            </div>
            <div className="shareButton">Share</div>
            </div>
            </div>
            </div>
  )
}

export default Share