import React from 'react';
import VideoCard from './VideoCard';

const VideoList = ({ videos, onVideoSelect }) => {
  console.log('VideoList', videos);



  const listOfVideos = videos.map((video) => {
    return <VideoCard key={video.id.videoId} video={video} />
  })

  return (
    <>
      <div>{listOfVideos}</div>
    </>
  )
};

export default VideoList;
