import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Observer from "@researchgate/react-intersection-observer";

import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import "./styles/global.css";

import PlayerContextProvider from "./context/player";
import LoaderContextProvider from "./context/loader";

import { PAGE_TYPE_SHOW, PAGE_TYPE_EPISODE } from "./common/consts";

import Home from "./pages/home";
import Episode from "./pages/episode";
import Podcast from "./pages/podcast";
import Shows from "./pages/shows";

import Main from "./components/main";
import Header from "./components/header";
import Footer from "./components/footer";
import Player from "./components/player";
import ScrollToTop from "./components/scroll-to-top";
import Loader from "./components/loader";

import PageRequestWrapper from "./components/page-request-wrapper";

const App = () => {
  const [footerVisible, setFooterVisible] = useState(false);

  // Sorry :-(
  const siteTitle = () => {
    let str = window.location.host
      .split(".")[0]
      .replace("-", " ")
      .split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
      str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    let joinedString = str.join(" ")

    if (str.includes('torchbox')) {
      document.title = joinedString;
      return;
    }

    let newSplitString = joinedString.split(" ");

    // Not sorry ;-p
    document.title = `${newSplitString[0].toUpperCase()} ${newSplitString[1]}`;
  };

  siteTitle();

  const footerObserverChange = e => {
    setFooterVisible(e.isIntersecting);
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <LoaderContextProvider>
          <PlayerContextProvider>
            <Main>
              <Router>
                <ScrollToTop>
                  <Header />

                  <Loader />

                  <Route path="/" exact component={Home} />

                  <Route
                    path="/shows/:show/:slug"
                    exact
                    render={props => (
                      <PageRequestWrapper type={PAGE_TYPE_EPISODE} {...props}>
                        <Episode />
                      </PageRequestWrapper>
                    )}
                  />
                  <Route
                    path="/shows/:slug"
                    exact
                    render={props => (
                      <PageRequestWrapper type={PAGE_TYPE_SHOW} {...props}>
                        <Podcast />
                      </PageRequestWrapper>
                    )}
                  />

                  <Route path="/shows/" exact component={Shows} />

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
        </LoaderContextProvider>
      </>
    </ThemeProvider>
  );
};

export default App;
