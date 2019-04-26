import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/podcast">Podcast</Link>
      </li>
      <li>
        <Link to="/episode">Episode</Link>
      </li>
      <li>
        <Link to="/story">Story</Link>
      </li>
    </ul>
  </nav>
);

export default Header;
