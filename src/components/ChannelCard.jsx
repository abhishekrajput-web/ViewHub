import React from 'react';
import { Link } from 'react-router-dom';
import {demoProfilePicture} from "../utils/constants"; 
import { AiFillCheckCircle } from 'react-icons/ai';

const ChannelCard = ({channelDetail}) => {
  return (
    <div className='channel-card'>
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <img src={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channelDetail?.snippet?.title} style={{width:"210px",borderRadius:"50%",maxWidth:"100%"}} />
     </Link>
      <div className="channel-content" style={{marginTop:"-40px"}}>
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <h3>  {channelDetail?.snippet?.title}{' '}<AiFillCheckCircle/></h3>
      {channelDetail?.statistics?.subscriberCount && (<h4> {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers</h4>)}
    </Link>
      </div>
  </div>
  )
}

export default ChannelCard