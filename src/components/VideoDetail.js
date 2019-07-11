import React from 'react';

const VideoDetail = ({ video }) => {
  console.log('video detail', video);
  if (!video) {
    return <div>Search a video, see a video...</div>
  }

  const videoUrl = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <>
      <iframe src={videoUrl} title={video.snippet.thumbnails.title} />
    </>
  )
}

export default VideoDetail;
