import React, { useEffect, useRef, useContext } from "react";

import { PlayerContext } from "../../context/player";

// https://stackoverflow.com/a/36981632
const secondsToTime = (currentTime) => {
  var curr = currentTime | '00';
  const minutes = "0" + Math.floor(curr / 60);
  const time  = "0" + (curr - minutes * 60);
  return minutes.substr(-2) + ":" + time.substr(-2);
}

const Audio = ({ audioSrc, volume, isPlaying }) => {
  const audioEl = useRef(null);

  const { setCurrentTime, setAudioDuration } = useContext(PlayerContext);

  useEffect(() => {
    if (audioSrc) {
      audioEl.current.addEventListener("timeupdate", () => {
        setCurrentTime(secondsToTime(audioEl.current.currentTime));
      });

      audioEl.current.src = audioSrc;
      audioEl.current.play();
    }
  }, [audioSrc, setCurrentTime]);

  useEffect(() => {
    if (audioSrc) {
      audioEl.current.addEventListener("timeupdate", () => {
        setAudioDuration(secondsToTime(audioEl.current.duration));
      });
    }
  }, [audioSrc, setAudioDuration]);

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
