import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Videos, ChannelCard } from "../components";
import { fetchData } from "../utils/api"; 


const ChannelDetail = () => {

  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();
//  console.log(channelDetail);
  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchData(`channels?part=snippet&id=${id}`);
      // console.log(data);

      setChannelDetail(data?.items[0]);

      const videosData = await fetchData(`search?channelId=${id}&part=snippet%2Cid&order=date`);
      // console.log(videosData);
      setVideos(videosData?.items);
      
    };

    fetchResults();
  }, [id]);

  return (
<div>
<div style={{
          height:'300px',          
          zIndex: 10,
        }} className="channel-bg">

<ChannelCard channelDetail={channelDetail}/>
        </div>

        <div>
        <Videos videos={videos} />
        </div>

</div>
  )
}

export default ChannelDetail;