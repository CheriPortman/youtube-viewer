import React from 'react';
import VideoCard from './VideoCard';

const VideoList = ({ videos }) => {
  console.log('VideoList', videos);
  return (
    <>
      <div>{videos.length}</div>
      <VideoCard videos={videos}/>
    </>
  )
};

export default VideoList;
