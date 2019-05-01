import React, { Component } from "react";
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
  StyledVolumeButton
} from "./styled";

import Audio from "../audio";
import IconVolumeUp from "../../svg/icon-volume-up";

class Player extends Component {
  constructor(props) {
    super(props);
    this.audio = React.createRef();
  }

  state = {
    showSlider: false
  };

  toggleSlider = () => {
    this.setState(state => ({
      ...state,
      showSlider: !state.showSlider
    }));
  };

  hideSlider = () => {
    this.setState(state => ({
      ...state,
      showSlider: false
    }));
  };

  render() {
    const { stickToFooter } = this.props;

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
              <StyledPlayerInner
                isPlaying={isPlaying}
                hasTrack={playingTrackId}
              >
                <StyledPlayerControls>
                  <StyledPlayerPlayButton
                    audioSrc={audioSrc}
                    label=""
                    trackId={playingTrackId}
                    trackName="Track One"
                  />

                  <StyledVolumeButton onClick={() => this.toggleSlider()} hide={this.state.showSlider}>
                    <IconVolumeUp color="#ffffff" />
                  </StyledVolumeButton>

                  {this.state.showSlider && (
                    <div
                      style={{
                        position: "absolute",
                        bottom: -5,
                        right: 25,
                        width: 20,
                        height: 80
                      }}
                    >
                      <Slider
                        vertical
                        min={0}
                        max={1}
                        step={0.1}
                        onChange={value => {
                          setPlayingVolume(value);
                          setTimeout(() => {
                            this.hideSlider();
                          }, 3000);
                        }}
                        defaultValue={playingVolume}
                      />
                    </div>
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
  }
}

export default Player;
