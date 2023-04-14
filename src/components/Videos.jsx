import React from 'react';
import { ChannelCard, VideoCard, Loader } from "./";
const Videos = ({ videos }) => {
  if(!videos?.length) return <Loader />;

  return (
    <section className='grid-video-container'>
      {videos.map((item, idx) => (
        <div key={idx}>
          {item.id.videoId && <VideoCard video={item} /> }
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </div>
      ))}
    </section>
  )
}

export default Videos