import styled, { css } from "styled-components";

import PlayButton from "../play-button";

const StyledPlayer = styled.div`
  position: sticky;
  bottom: 0;
  width: 650px;
  z-index: 3;

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
  padding: 20px 120px 20px 0;
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

  ${process.env.REACT_APP_SITE_SLUG === "wbgo-radio" &&
    css`
      background: #d2232a;
    `}
`;

const StyledPlayerControls = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 25px 0 35px;
`;

const StyledPlayerPlayButton = styled(PlayButton)``;

const StyledPlayerEq = styled.div`
  margin: 0 0 0 10px;
  width: 24px;
  height: 24px;
  opacity: 0.7;
`;

const StyledVolumeButton = styled.div`
  margin: 0 0 0 10px;
  width: 24px;
  height: 24px;
  opacity: ${props => (props.hide ? "0" : "1")}

  &:hover {
    opaciy: 0.8;
    cursor: pointer;
  }
`;

const StyledSliderContainer = styled.div`
  position: absolute;
  bottom: -5px;
  right: 60px;
  width: 20px;
  height: 80px;

  .rc-slider-rail {
    background: ${props => props.theme.colors.white};
    border: 2px solid ${props => props.theme.colors.coral};
  }
`;

const StyledPlayerBrand = styled.div`
  display: flex;
  align-items: center;
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

    ${process.env.REACT_APP_SITE_SLUG === "wbgo-radio" &&
      css`
        background: #ec8589;
      `}
  }

  &:after {
    left: auto;
    right: 0;
  }
`;

const StyledPlayerBrandName = styled.div`
  flex-shrink: 0;
`;

const StyledPlayerTrack = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  padding: 0 25px;
`;

const StyledPlayerTrackImage = styled.div`
  margin: 0 10px 0 0;
  width: 26px;
  height: 26px;
  flex-shrink: 0;

  background-image: url(${props => props.imageUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  &:hover {
    opacity: 0.8;
  }
`;

const StyledPlayerTrackText = styled.div`
  font-size: 12px;
`;

const StyledPlayerTrackCurrent = styled.div`
  margin: 0 0 2px 0;
  font-weight: ${props => props.theme.fonts.bold};
`;

const StyledPlayerTrackName = styled.div``;

const StyledPlayerTrackTime = styled.div`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-6px);
`;

export {
  StyledPlayer,
  StyledPlayerInner,
  StyledPlayerBrand,
  StyledPlayerBrandName,
  StyledPlayerControls,
  StyledPlayerPlayButton,
  StyledPlayerTrack,
  StyledPlayerTrackImage,
  StyledPlayerTrackText,
  StyledPlayerTrackCurrent,
  StyledPlayerTrackName,
  StyledVolumeButton,
  StyledSliderContainer,
  StyledPlayerEq,
  StyledPlayerTrackTime
};
