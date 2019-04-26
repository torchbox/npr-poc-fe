import React from "react";

import PlayButton from "../../components/play-button";

const Home = () => (
  <>
    <h1>Home</h1>
    <div>
      <PlayButton
        audioSrc="/audio/track-one.mp3"
        label="Track One"
        trackId="track-one"
      />
    </div>
    <div>
      <PlayButton
        audioSrc="/audio/track-two.mp3"
        label="Track Two"
        trackId="track-two"
      />
    </div>
  </>
);

export default Home;
