import React, { useContext } from "react";

import { PlayerContext } from "../../context/player";

import { StyledPlayButton } from './styled';

import IconVolumeUp from '../../svg/icon-volume-up';

const PlayButton = ({ label, audioSrc, trackId }) => {
  const {
    setAudioSrc,
    isPlaying,
    setIsPlaying,
    playingTrackId,
    setPlayingTrackId
  } = useContext(PlayerContext);

  return (
    <StyledPlayButton
      onClick={() => {
        if (playingTrackId !== trackId) {
          console.log(`Playing ${trackId}`);

          setIsPlaying(true);
        } else if (playingTrackId === trackId && isPlaying) {
          console.log(`Paused ${trackId}`);

          setIsPlaying(false);
        } else if (playingTrackId === trackId && !isPlaying) {
          console.log(`Re-playing ${trackId}`);

          setIsPlaying(true);
        }

        setAudioSrc(audioSrc);
        setPlayingTrackId(trackId);
      }}
    >
      <IconVolumeUp color="#1d7566" /> {label}
    </StyledPlayButton>
  );
};

export default PlayButton;
