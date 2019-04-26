import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import PlayerContextProvider from "./context/player";

import Home from "./pages/home";
import Episode from "./pages/episode";
import Podcast from "./pages/podcast";
import Story from "./pages/story";

import Header from "./components/header";
import Player from "./components/player";

const App = () => {
  return (
    <div>
      <PlayerContextProvider>
        <Router>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/podcast" component={Podcast} />
          <Route path="/episode" component={Episode} />
          <Route path="/story" component={Story} />
        </Router>
        <Player />
      </PlayerContextProvider>
    </div>
  );
}

export default App;
