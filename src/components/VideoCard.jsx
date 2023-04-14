import React from 'react'
import { Link } from "react-router-dom"; 
import { AiFillCheckCircle } from 'react-icons/ai';

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  return (
    <div className='video-card'>
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
      <img src={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title} style={{width:"100%",}} />
    </Link>
      <div className="video-content">
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl }>
   <h2>{snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}</h2>
    </Link>

    <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
   <h4>{snippet?.channelTitle || demoChannelTitle} <AiFillCheckCircle/></h4>
    </Link>
      </div>
  </div>
  )
}

export default VideoCard