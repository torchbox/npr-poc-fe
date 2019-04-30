import React from "react";

import { StyledTrending, StyledTrendingStream } from "./styled";

const Trending = () => {
  return (
    <StyledTrending>
      <h2>Trending Streams</h2>
      <StyledTrendingStream
        station="WNYC"
        name="Morning edition"
        iconSrc="/images/show_wnyc.png"
        audioSrc="/audio/track-two.mp3"
        trackId="wnyc-morning-edition"
        type="ghost"
        trackName="WNYC - Morning edition"
      />
      <StyledTrendingStream
        station="NJPR"
        name="Morning edition"
        iconSrc="/images/show_new-sounds.jpg"
        audioSrc="/audio/track-one.mp3"
        trackId="njpr-morning-edition"
        type="ghost"
        trackName="NJPR - Morning edition"
      />
      <StyledTrendingStream
        station="WXQR"
        name="New York At Night"
        iconSrc="/images/show_wnyc.png"
        audioSrc="/audio/track-two.mp3"
        trackId="wxqr-new-york"
        type="ghost"
        trackName="WXQR - New York At Night"
      />
    </StyledTrending>
  );
};

export default Trending;
