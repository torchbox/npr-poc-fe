import React, { useState, useContext, useEffect } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import { PlayerContext } from "../../context/player";

import {
  StyledPlayer,
  StyledPlayerInner,
  StyledPlayerControls,
  StyledPlayerPlayButton,
  StyledPlayerBrand,
  StyledPlayerTrack,
  StyledPlayerTrackImage,
  StyledPlayerTrackText,
  StyledPlayerTrackCurrent,
  StyledPlayerTrackName,
  StyledVolumeButton,
  StyledSliderContainer,
  StyledPlayerEq,
  StyledPlayerTrackTime,
  StyledPlayerBrandName
} from "./styled";

import Audio from "../audio";
import IconVolumeUp from "../../svg/icon-volume-up";
import IconEq from "../../svg/icon-eq";

const Player = ({ stickToFooter }) => {
  const [showSlider, setShowSlider] = useState(false);

  const {
    audioSrc,
    isPlaying,
    playingTrackId,
    playingTrackImage,
    playingTrackName,
    playingVolume,
    setPlayingVolume,
    currentTime,
    audioDuration
  } = useContext(PlayerContext);

  useEffect(() => {
    const equalizer = document.getElementById("lds-equalizer");

    if (isPlaying) {
      equalizer.unpauseAnimations();
    } else {
      equalizer.pauseAnimations();
    }
  }, [isPlaying]);

  return (
    <StyledPlayer
      isPlaying={isPlaying}
      hasTrack={playingTrackId}
      stickToFooter={stickToFooter}
    >
      <StyledPlayerInner isPlaying={isPlaying} hasTrack={playingTrackId}>
        <StyledPlayerControls>
          <StyledPlayerPlayButton
            audioSrc={audioSrc}
            label=""
            trackId={playingTrackId}
            trackName="Track One"
          />
          <StyledVolumeButton
            onClick={() => setShowSlider(!showSlider)}
            hide={showSlider}
          >
            <IconVolumeUp color="#ffffff" />
          </StyledVolumeButton>
          {showSlider && (
            <StyledSliderContainer>
              <Slider
                vertical
                min={0}
                max={1}
                step={0.1}
                onChange={value => {
                  setPlayingVolume(value);
                  setTimeout(() => {
                    setShowSlider(false);
                  }, 3000);
                }}
                defaultValue={playingVolume}
              />
            </StyledSliderContainer>
          )}
          <StyledPlayerEq>
            <IconEq />
          </StyledPlayerEq>
        </StyledPlayerControls>
        <StyledPlayerBrand>
          <StyledPlayerTrackImage imageUrl="/images/torchbox_logo.png" />
          <StyledPlayerBrandName>Torchbox Radio</StyledPlayerBrandName>
        </StyledPlayerBrand>
        <StyledPlayerTrack>
          <StyledPlayerTrackImage imageUrl={playingTrackImage} />
          <StyledPlayerTrackText>
            <StyledPlayerTrackCurrent>
              Currently Playing
            </StyledPlayerTrackCurrent>
            <StyledPlayerTrackName>{playingTrackName} </StyledPlayerTrackName>
            <StyledPlayerTrackTime>
              {currentTime} / {audioDuration}
            </StyledPlayerTrackTime>
          </StyledPlayerTrackText>
        </StyledPlayerTrack>
      </StyledPlayerInner>
      <Audio audioSrc={audioSrc} isPlaying={isPlaying} volume={playingVolume} />
    </StyledPlayer>
  );
};

export default Player;
