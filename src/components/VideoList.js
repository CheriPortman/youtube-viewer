import React from 'react';
import VideoCard from './VideoCard';

const VideoList = ({ videos, onVideoSelect }) => {
  
  const listOfVideos = videos.map((video) => {
    return (
      <VideoCard 
        key={video.id.videoId} 
        video={video} 
        onVideoSelect={onVideoSelect}
      />
    )
  })

  return (
    <>
      <div>{listOfVideos}</div>
    </>
  )
};

export default VideoList;
