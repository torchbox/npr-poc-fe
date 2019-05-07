import React, { useEffect, useRef } from "react";

const Audio = ({ audioSrc, volume, isPlaying }) => {
  const audioEl = useRef(null);

  useEffect(() => {
    audioEl.current.src = audioSrc;
    audioEl.current.play();
  }, [audioSrc]);

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    audioEl.current.volume = volume;
  }, [volume]);

  return (
    <audio ref={audioEl}>
      <source src={audioSrc} type="audio/mpeg" />
    </audio>
  );
};

export default Audio;
