import React from 'react';

import HoverVideoPlayer from 'react-hover-video-player';

export const VideoHoverPreview = () => (
  <HoverVideoPlayer
    videoSrc="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    pausedOverlay={(
      <img
        src="https://images.pexels.com/photos/5041455/pexels-photo-5041455.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt="imagen"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    )}
    loadingOverlay={<div className="loading-spinner-overlay" />}
  />
);
