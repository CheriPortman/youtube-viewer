import React from 'react';
import { VideoCardWrapper } from './styledComponents';

const VideoCard = ({ video, onVideoSelect }) => {

  return (
    <VideoCardWrapper onClick={() => onVideoSelect(video)}>
      <div>{video.snippet.title}</div>
      <img 
        src={video.snippet.thumbnails.medium.url} 
        alt={video.snippet.channelTitle} 
      />
      <div>{video.snippet.description}</div>
    </VideoCardWrapper>
  )
}

export default VideoCard;
