import React from "react";

import {
  StyledHeader,
  StyledHeaderInner,
  StyledHeaderLogo,
  StyledHeaderLink,
  StyledHeaderStaticLink
} from "./styled";

import TorchboxLogo from "../../svg/torchbox-logo";

import Button from "../button";

const Header = () => (
  <StyledHeader>
    <StyledHeaderInner>
      <StyledHeaderLogo to="/">
        <TorchboxLogo />
      </StyledHeaderLogo>
      <div>
        <StyledHeaderStaticLink to="/all-streams">All Streams</StyledHeaderStaticLink>
        <StyledHeaderStaticLink to="/shedule">Schedule</StyledHeaderStaticLink>
        <StyledHeaderLink to="/shows">Shows</StyledHeaderLink>
        <StyledHeaderStaticLink to="/news">News</StyledHeaderStaticLink>
        <StyledHeaderStaticLink to="/topics">Topics</StyledHeaderStaticLink>
        <StyledHeaderStaticLink to="/discover">Discover</StyledHeaderStaticLink>
        <Button label="Donate" />
      </div>
    </StyledHeaderInner>
  </StyledHeader>
);

export default Header;
