import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Observer from "@researchgate/react-intersection-observer";

import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import "./styles/global.css";

import PlayerContextProvider from "./context/player";

import Home from "./pages/home";
import Episode from "./pages/episode";
import Podcast from "./pages/podcast";
import Story from "./pages/story";

import Main from "./components/main";
import Header from "./components/header";
import Footer from "./components/footer";
import Player from "./components/player";

const App = () => {
  const [footerVisible, setFooterVisible] = useState(false);

  const footerObserverChange = e => {
    setFooterVisible(e.isIntersecting);
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <PlayerContextProvider>
          <Main>
            <Router>
              <Header />
              <Route path="/" exact component={Home} />
              <Route path="/podcast" component={Podcast} />
              <Route path="/episode" component={Episode} />
              <Route path="/story" component={Story} />
              <Observer onChange={footerObserverChange}>
                <div>
                  <Footer />
                </div>
              </Observer>
            </Router>
            <Player stickToFooter={footerVisible} />
          </Main>
        </PlayerContextProvider>
      </>
    </ThemeProvider>
  );
};

export default App;
