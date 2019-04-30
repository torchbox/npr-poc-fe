import React, { createContext, useState } from "react";

export const PlayerContext = createContext();

export const NotificationContext = createContext();

export default ({ children }) => {
  const [audioSrc, setAudioSrc] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playingTrackId, setPlayingTrackId] = useState(null);
  const [playingTrackName, setPlayingTrackName] = useState(null);
  const [playingTrackImage, setPlayingTrackImage] = useState(null);

  return (
    <PlayerContext.Provider
      value={{
        audioSrc,
        setAudioSrc,
        isPlaying,
        setIsPlaying,
        playingTrackId,
        setPlayingTrackId,
        playingTrackName,
        setPlayingTrackName,
        playingTrackImage,
        setPlayingTrackImage
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};
