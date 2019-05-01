import React, { useState } from "react";
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
  StyledSliderContainer
} from "./styled";

import Audio from "../audio";
import IconVolumeUp from "../../svg/icon-volume-up";

const Player = ({ stickToFooter }) => {
  const [showSlider, setShowSlider] = useState(false);

  return (
    <PlayerContext.Consumer>
      {({
        audioSrc,
        isPlaying,
        playingTrackId,
        playingTrackImage = "/images/torchbox_logo.png",
        playingTrackName,
        playingVolume,
        setPlayingVolume
      }) => {
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
              </StyledPlayerControls>
              <StyledPlayerBrand>Torchbox FM</StyledPlayerBrand>
              <StyledPlayerTrack>
                <StyledPlayerTrackImage src={playingTrackImage} />
                <StyledPlayerTrackText>
                  <StyledPlayerTrackCurrent>
                    Currently Playing
                  </StyledPlayerTrackCurrent>
                  <StyledPlayerTrackName>
                    {playingTrackName}
                  </StyledPlayerTrackName>
                </StyledPlayerTrackText>
              </StyledPlayerTrack>
            </StyledPlayerInner>
            <Audio
              audioSrc={audioSrc}
              isPlaying={isPlaying}
              volume={playingVolume}
            />
          </StyledPlayer>
        );
      }}
    </PlayerContext.Consumer>
  );
};

export default Player;
