import React, { Component } from "react";

class Audio extends Component {
  constructor(props) {
    super(props);
    this.audio = React.createRef();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.audioSrc !== this.props.audioSrc) {
      this.refs.audio.src = nextProps.audioSrc;
      this.refs.audio.play();
      return true;
    }

    if (nextProps.isPlaying !== this.props.isPlaying) {
      if (!nextProps.isPlaying) {
        this.refs.audio.pause();
        return true;
      } else {
        this.refs.audio.play();
        return true;
      }
    }
  }

  render() {
    return (
      <audio ref="audio">
        <source src={this.props.audioSrc} type="audio/mpeg" />
      </audio>
    );
  }
}

export default Audio;
