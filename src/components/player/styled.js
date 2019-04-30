import styled, { css } from "styled-components";

import PlayButton from "../play-button";

const StyledPlayer = styled.div`
  position: sticky;
  bottom: 0;
  width: 600px;

  ${props =>
    props.stickToFooter &&
    css`
      position: absolute;
      bottom: 400px;
      transform: translateY(26px);
    `}
`;

const StyledPlayerInner = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;
  background: ${props => props.theme.colors.purple};
  color: ${props => props.theme.colors.white};
  transform: translateY(100%);
  transition: all 0.3s;
  opacity: 0;

  ${props =>
    (props.isPlaying || props.hasTrack) &&
    css`
      transform: translateY(0);
      opacity: 1;
    `}
`;

const StyledPlayerControls = styled.div`
  padding: 0 25px 0 35px;
`;

const StyledPlayerPlayButton = styled(PlayButton)``;

const StyledPlayerBrand = styled.div`
  position: relative;
  padding: 0 25px;
  font-size: 14px;
  font-weight: ${props => props.theme.fonts.bold};

  &:before,
  &:after {
    position: absolute;
    content: "";
    background: #9789c6;
    width: 1px;
    height: 26px;
    top: 50%;
    left: 0;
    transform: translateY(-13px);
  }

  &:after {
    left: auto;
    right: 0;
  }
`;

const StyledPlayerTrack = styled.div`
  display: flex;
  align-items: center;
  padding: 0 25px;
`;

const StyledPlayerTrackImage = styled.img`
  margin: 0 10px 0 0;
  width: 26px;
  height: 26px;
`;

const StyledPlayerTrackText = styled.div`
  font-size: 12px;
`;

const StyledPlayerTrackCurrent = styled.div`
  margin: 0 0 2px 0;
  font-weight: ${props => props.theme.fonts.bold};
`;

const StyledPlayerTrackName = styled.div``;

export {
  StyledPlayer,
  StyledPlayerInner,
  StyledPlayerBrand,
  StyledPlayerControls,
  StyledPlayerPlayButton,
  StyledPlayerTrack,
  StyledPlayerTrackImage,
  StyledPlayerTrackText,
  StyledPlayerTrackCurrent,
  StyledPlayerTrackName
};
