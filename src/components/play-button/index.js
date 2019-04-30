import React, { useContext } from "react";

import { PlayerContext } from "../../context/player";

import { StyledPlayButton } from "./styled";

import IconPlay from "../../svg/icon-play";
import IconPause from "../../svg/icon-pause";

const PlayButton = ({
  name,
  audioSrc,
  trackId,
  type = "default",
  ...rest
}) => {
  const {
    setAudioSrc,
    isPlaying,
    setIsPlaying,
    playingTrackId,
    setPlayingTrackId
  } = useContext(PlayerContext);

  const iconColors = {
    default: "#ffffff",
    ghost: "#ffffff"
  };

  return (
    <StyledPlayButton
      type={type}
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
      {...rest}
    >
      {isPlaying ? (
        <IconPause color={iconColors[type]} />
      ) : (
        <IconPlay color={iconColors[type]} />
      )}
    </StyledPlayButton>
  );
};

export default PlayButton;
