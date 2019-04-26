import React, { Component } from "react";

import { PlayerContext } from "../../context/player";

import Audio from "../audio";

import PlayButton from '../play-button';

import "./index.css";

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
            <div className={`player ${isPlaying ? "player--is-playing" : ""} ${playingTrackId ? "player--has-track" : ""}`}>
              <Audio audioSrc={audioSrc} isPlaying={isPlaying} />
              <PlayButton audioSrc={audioSrc} label='' trackId={playingTrackId} />
              <span className='player__track-name'>{playingTrackId}</span>
            </div>
          );
        }}
      </PlayerContext.Consumer>
    );
  }
}

export default Player;
