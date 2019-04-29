import React from "react";
import { Link } from "react-router-dom";

import { StyledHeader, StyledHeaderLink } from "./styled";

const Header = () => (
  <StyledHeader>
    <ul>
      <li>
        <StyledHeaderLink to="/">Home</StyledHeaderLink>
      </li>
      <li>
        <StyledHeaderLink to="/podcast">Podcast</StyledHeaderLink>
      </li>
      <li>
        <StyledHeaderLink to="/episode">Episode</StyledHeaderLink>
      </li>
      <li>
        <StyledHeaderLink to="/story">Story</StyledHeaderLink>
      </li>
    </ul>
  </StyledHeader>
);

export default Header;
