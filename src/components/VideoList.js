import React from 'react';

const VideoList = (props) => {
  console.log('VideoList', props);
  return <div>{props.videos.length}</div>
};

export default VideoList;
