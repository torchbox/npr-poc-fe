import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './pages/home';
import Episode from './pages/episode';
import Podcast from './pages/podcast';
import Story from './pages/story';

import Header from './components/header';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/podcast" component={Podcast} />
        <Route path="/episode" component={Episode} />
        <Route path="/story" component={Story} />
      </Router>
    </div>
  );
}

export default App;
