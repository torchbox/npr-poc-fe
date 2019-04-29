import React, { Component } from "react";

import { PlayerContext } from "../../context/player";

import { StyledPlayer, StyledPlayerPlayButton } from './styled'

import Audio from "../audio";

class Player extends Component {
  constructor(props) {
    super(props);
    this.audio = React.createRef();
  }

  render() {
    return (
      <PlayerContext.Consumer>
        {({ audioSrc, isPlaying, playingTrackId }) => {
          return (
            <StyledPlayer isPlaying={isPlaying} hasTrack={playingTrackId}>
              <Audio audioSrc={audioSrc} isPlaying={isPlaying} />
              <StyledPlayerPlayButton audioSrc={audioSrc} label='' trackId={playingTrackId} />
              <span className='player__track-name'>{playingTrackId}</span>
            </StyledPlayer>
          );
        }}
      </PlayerContext.Consumer>
    );
  }
}

export default Player;
