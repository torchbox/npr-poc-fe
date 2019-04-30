import React, { Component } from "react";

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
  StyledPlayerTrackName
} from "./styled";

import Audio from "../audio";

class Player extends Component {
  constructor(props) {
    super(props);
    this.audio = React.createRef();
  }

  render() {
    const { stickToFooter } = this.props;

    return (
      <PlayerContext.Consumer>
        {({
          audioSrc,
          isPlaying,
          playingTrackId,
          playingTrackImage = "images/show_new-sounds.jpg",
          playingTrackName
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
              <Audio audioSrc={audioSrc} isPlaying={isPlaying} />
            </StyledPlayer>
          );
        }}
      </PlayerContext.Consumer>
    );
  }
}

export default Player;
