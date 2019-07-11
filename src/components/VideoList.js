import React from 'react';
import VideoCard from './VideoCard';
import { VideoCardListWrapper, SearchResults } from './styledComponents';

const VideoList = ({ videos, onVideoSelect, searchParam }) => {
  
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
      <SearchResults>Results for your {searchParam} search:</SearchResults>
      <VideoCardListWrapper>{listOfVideos}</VideoCardListWrapper>
    </>
  )
};

export default VideoList;
