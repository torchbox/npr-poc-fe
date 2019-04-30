import React from "react";

import { StyledStream, StyledStreamText } from "./styled";

import PlayCtaButton from "../play-cta-button";

const Stream = ({ station, name, iconSrc, audioSrc, trackId, trackName, className }) => {
  return (
    <StyledStream className={className}>
      <StyledStreamText>
        <div>
          <img src={iconSrc} alt="" />
        </div>
        <div>
          <span><strong>{station}</strong></span>
          <span>{name}</span>
        </div>
      </StyledStreamText>
      <PlayCtaButton type="ghost" trackId={trackId} audioSrc={audioSrc} trackName={trackName} trackImage={iconSrc} isLive />
    </StyledStream>
  );
};

export default Stream;
