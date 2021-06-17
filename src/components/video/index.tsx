/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import videojs from 'video.js';
import VREPlayer from 'videojs-react-enhanced';

interface Props {
  muted?: boolean | undefined;
}

export const Video = ({ muted }: Props) => {
  const playerOptions: VREPlayer.IPlayerOptions = {
    src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    controls: true,
    autoplay: 'muted',
    muted: muted || false,
  };

  const videojsOptions: VREPlayer.IVideoJsOptions = {
    fluid: true,
  };

  const resources = {
    poster:
      'https://images.pexels.com/photos/1029896/pexels-photo-1029896.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  };

  return (
    <VREPlayer
      resources={resources}
      playerOptions={playerOptions}
      videojsOptions={videojsOptions}
      onReady={(player) => console.log(player)}
      onPlay={(e, _, second) => console.log('Play!')}
      onPause={(e, _, second) => console.log('Pause!')}
      onEnded={(e, _) => console.log('Ended!')}
    />
  );
};
