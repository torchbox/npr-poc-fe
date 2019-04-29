import React, { useContext } from "react";

import { PlayerContext } from "../../context/player";

import { StyledPlayCtaButton, StyledPlayCtaButtonName } from "./styled";

import IconVolumeUp from "../../svg/icon-volume-up";

const PlayCtaButton = ({ name, audioSrc, trackId, type = "default" }) => {
  const {
    setAudioSrc,
    isPlaying,
    setIsPlaying,
    playingTrackId,
    setPlayingTrackId
  } = useContext(PlayerContext);

  const iconColors = {
    default: "#1d7566",
    ghost: "#3beccd"
  };

  return (
    <StyledPlayCtaButton
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
    >
      <IconVolumeUp color={iconColors[type]} />{" "}
      {name && <StyledPlayCtaButtonName>{name} -</StyledPlayCtaButtonName>} Listen
      Live
    </StyledPlayCtaButton>
  );
};

export default PlayCtaButton;