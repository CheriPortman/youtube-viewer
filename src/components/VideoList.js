import React from 'react';
import VideoCard from './VideoCard';
import { VideoCardListWrapper } from './styledComponents';

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
      <h1>Results for your search for ${}</h1>
      <VideoCardListWrapper>{listOfVideos}</VideoCardListWrapper>
    </>
  )
};

export default VideoList;
