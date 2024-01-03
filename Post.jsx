import React from 'react'
import "./post.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import {Users} from "../../dummyData"
import { useState } from 'react';
export default function Post({post}) {
  
  const [like,setLike] = useState(post.like)
  const [isLiked,setIsLiked] = useState(false)

  const likeHandler =()=>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }
  return (
    <div>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}></img>
               <span className="postUsername">{Users.filter((u) => u.id === post?.userId)[0].username}</span>
               
               <span className="postDate">{post.date}</span> 
               </div>
                <div className="postTopRight">
                <FontAwesomeIcon icon={faEllipsisV} />
                </div>
            </div>
        
        <div className="postCenter">
        <span className="postText">{post?.desc}</span>
       <img  className="postImg" src={post.photo
      }></img>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className='likeIcon'  onClick={likeHandler} src="https://img.freepik.com/free-vector/like-button-thumbs-up-cartoon-style_78370-1159.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1704067200&semt=sph"></img>
               <img className='likeIcon' onClick={likeHandler} src="https://cdn.pixabay.com/photo/2020/09/30/07/48/heart-5614865_1280.png"></img>
               <spna className="postlikeCounter">{like} people like it</spna>
          </div>
        <div className="postBottomRight"></div>
        <span className='postCommentText' >{post.comment}</span>
        </div>
    </div>
    </div>
  )
}
