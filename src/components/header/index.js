import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/podcast">Podcast</Link>
    <Link to="/episode">Episode</Link>
    <Link to="/story">Story</Link>
  </nav>
);

export default Header;
