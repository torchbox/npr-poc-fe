import React, { useContext, useEffect } from "react";

import { PlayerContext } from "../../context/player";

const PlayButton = ({ label, audioSrc, trackId }) => {
  const {
    setAudioSrc,
    isPlaying,
    setIsPlaying,
    playingTrackId,
    setPlayingTrackId
  } = useContext(PlayerContext);

  return (
    <button
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
      {isPlaying && trackId === playingTrackId ? "Pause" : "Play"} {label}
    </button>
  );
};

export default PlayButton;
