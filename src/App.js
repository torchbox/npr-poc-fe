import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyle from "./styles/global";

import PlayerContextProvider from "./context/player";

import Home from "./pages/home";
import Episode from "./pages/episode";
import Podcast from "./pages/podcast";
import Story from "./pages/story";

import Header from "./components/header";
import Footer from "./components/footer";
import Player from "./components/player";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <PlayerContextProvider>
          <Router>
            <Header />
            <Route path="/" exact component={Home} />
            <Route path="/podcast" component={Podcast} />
            <Route path="/episode" component={Episode} />
            <Route path="/story" component={Story} />
            <Footer />
          </Router>
          <Player />
        </PlayerContextProvider>
      </>
    </ThemeProvider>
  );
};

export default App;
