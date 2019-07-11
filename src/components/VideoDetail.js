import React from 'react';
import { IframeWrapper, Iframe } from './styledComponents';

const VideoDetail = ({ video }) => {
  console.log('video detail', video);
  if (!video) {
    return <div>Search a video, see a video...</div>
  }

  const videoUrl = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <IframeWrapper>
      <Iframe src={videoUrl} title={video.snippet.thumbnails.title} />
    </IframeWrapper>
  )
}

export default VideoDetail;
