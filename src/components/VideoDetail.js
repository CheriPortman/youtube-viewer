import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Search a video, see a video...</div>
  }
  const videoUrl = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <>
      <div>video goes here{video}</div>
      <iframe src={videoUrl} title={video.thumbnails.title} />
    </>
  )
}

export default VideoDetail;
