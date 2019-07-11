import React from 'react';

const VideoCard = ({ video }) => {


  return (
    <div>
      <div>{video.snippet.channelTitle}</div>
      <img 
        src={video.snippet.thumbnails.medium.url} 
        alt={video.snippet.channelTitle} 
      />
      <div>{video.snippet.description}</div>
    </div>
  )
}

export default VideoCard;
