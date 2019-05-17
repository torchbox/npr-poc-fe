import React from "react";

import { StyledTrending, StyledTrendingStream } from "./styled";

// https://www.podtrac.com/pts/redirect.mp3/audio.wnyc.org/standards/standards20190401_melissa_errico.mp3

const Trending = () => {
  return (
    <StyledTrending>
      <h2>Trending Streams</h2>
      <StyledTrendingStream
        station="WNYC"
        name="Morning edition"
        iconSrc="/images/show_wnyc.png"
        audioSrc="/audio/wnyc-morning-edition.mp3"
        trackId="wnyc-morning-edition"
        type="ghost"
        trackName="WNYC - Morning edition"
      />
      <StyledTrendingStream
        station="NJPR"
        name="BBC Newshour"
        iconSrc="/images/show_njpr.png"
        audioSrc="/audio/njpr-morning-edition.mp3"
        trackId="njpr-news-hour"
        type="ghost"
        trackName="NJPR - BBC Newshour"
      />
      <StyledTrendingStream
        station="WXQR"
        name="Performance Today"
        iconSrc="/images/show_wqxr.png"
        audioSrc="/audio/performance-today.mp3"
        trackId="wxqr-new-york"
        type="ghost"
        trackName="WXQR - Performance Today"
      />
    </StyledTrending>
  );
};

export default Trending;
