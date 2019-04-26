import React, { Component } from "react";

import { PlayerContext } from "../../context/player";

import StyledConnectionBar from './styled'

import Audio from "../audio";
import PlayButton from '../play-button';

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
            <StyledConnectionBar isPlaying={isPlaying} hasTrack={playingTrackId}>
              <Audio audioSrc={audioSrc} isPlaying={isPlaying} />
              <PlayButton audioSrc={audioSrc} label='' trackId={playingTrackId} />
              <span className='player__track-name'>{playingTrackId}</span>
            </StyledConnectionBar>
          );
        }}
      </PlayerContext.Consumer>
    );
  }
}

export default Player;
