import styled, { css } from "styled-components";

import PlayButton from "../play-button";

const StyledPlayer = styled.div`
  position: sticky;
  bottom: 0;
  width: 600px;
  padding: 20px;
  background: ${props => props.theme.colors.purple};
  color: ${props => props.theme.colors.white};
  opacity: 0;
  transform: translateX(-100%);
  transition: 0.3s;

  // Using props to set values like so:
  // is causing a repaint flicker on the whole app.
  // (dollars removed to prevent props being read and causing the flicker)
  // opacity: {props => (props.isPlaying && props.hasTrack) ? 1 : 0};
  // transform: {props => (props.isPlaying && props.hasTrack) ? 'translateX(0)' : 'translateX(-100%)' }

  // So let's go old school
  &.isPlaying {
    opacity: 1;
    transform: translateX(0);
  }

  &.isSticky {
    position: absolute;
    bottom: 400px;
    transition: none;
  }
`;

const StyledPlayerPlayButton = styled(PlayButton)`
  margin: 0 10px 0 0;
`;

export { StyledPlayer, StyledPlayerPlayButton };
