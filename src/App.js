import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Observer from "@researchgate/react-intersection-observer";

import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import "./styles/global.css";

import PlayerContextProvider from "./context/player";
import PagesContextProvider from "./context/pages";

import Home from "./pages/home";
import Episode from "./pages/episode";
import Podcast from "./pages/podcast";
import Shows from "./pages/shows";

import Main from "./components/main";
import Header from "./components/header";
import Footer from "./components/footer";
import Player from "./components/player";
import ScrollToTop from "./components/scroll-to-top";

import PageRequestWrapper from "./components/page-request-wrapper";

const App = () => {
  const [footerVisible, setFooterVisible] = useState(false);

  const footerObserverChange = e => {
    setFooterVisible(e.isIntersecting);
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <PagesContextProvider>
          <PlayerContextProvider>
            <Main>
              <Router>
                <ScrollToTop>
                  <Header />
                  <Route path="/" exact component={Home} />
                  <Route path="/shows/" exact component={Shows} />
                  <Route
                    path="/shows/:slug"
                    render={props => (
                      <PageRequestWrapper {...props}>
                        <Podcast />
                      </PageRequestWrapper>
                    )}
                  />
                  <Route
                    path="/episode/:slug"
                    render={props => (
                      <PageRequestWrapper {...props}>
                        <Episode />
                      </PageRequestWrapper>
                    )}
                  />

                  {/* Preview Routes */}

                  <Route
                    path="/preview"
                    render={props => {
                      const queryString = props.location.search || false;

                      if (
                        !queryString ||
                        !queryString.includes("content_type") ||
                        !queryString.includes("token")
                      ) {
                        return null;
                      }

                      const previewEpisode = queryString.includes(
                        "content_type=podcasts.episode"
                      );

                      return (
                        <PageRequestWrapper {...props} preview>
                          {previewEpisode ? <Episode /> : <Podcast />}
                        </PageRequestWrapper>
                      );
                    }}
                  />

                  <Observer onChange={footerObserverChange}>
                    <div>
                      <Footer />
                    </div>
                  </Observer>
                </ScrollToTop>
              </Router>
              <Player stickToFooter={footerVisible} />
            </Main>
          </PlayerContextProvider>
        </PagesContextProvider>
      </>
    </ThemeProvider>
  );
};

export default App;
