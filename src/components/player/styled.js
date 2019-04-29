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

  ${props =>
    (props.isPlaying || props.hasTrack) &&
    css`
      opacity: 1;
      transform: translateX(0);
    `}

  ${props =>
    (props.stickToFooter) &&
    css`
      position: absolute;
      bottom: 400px;
      transition: none;
    `}
`;

const StyledPlayerPlayButton = styled(PlayButton)`
  margin: 0 10px 0 0;
`;

export { StyledPlayer, StyledPlayerPlayButton };
