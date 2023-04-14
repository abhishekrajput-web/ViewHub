import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { AiFillCheckCircle } from "react-icons/ai";

import { Videos, Loader } from "../components";
import { fetchData } from "../utils/api"; 

const VideoDetail = () => {

  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchData(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))

    fetchData(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))
  }, [id]);

  if(!videoDetail?.snippet) return <Loader />;

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;
 
  return (
    <section>
      <div className="video-detail-container-wrap">
        <div className="video-detail-container">
        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls  />
       <h2 style={{color:"#fff"}}> {title}</h2>
      <Link to={`/channel/${channelId}`}>
        <h4 style={{color:"#fff"}}>{channelTitle} <AiFillCheckCircle/> </h4>
      </Link>
     <div>
        <h4 style={{color:"#ccc",fontSize:"1.3rem",marginTop:"1rem",fontWeight:"bold"}}>{parseInt(viewCount).toLocaleString()} - views</h4>
        <h4 style={{color:"#ccc",fontSize:"1.3rem",marginTop:"1rem",fontWeight:"bold"}}>{parseInt(likeCount).toLocaleString()} - likes</h4>     
     </div>
        </div>

      <div style={{marginTop:"4rem"}}>
      <h2 style={{color:"red",fontSize:"2rem",fontWeight:"bold"}}><span style={{color:"#fff"}}>Related</span>  Videos</h2>
      <Videos videos={videos}/>
      </div>

      </div>
    </section>
  )
}

export default VideoDetail