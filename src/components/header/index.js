import React from "react";

import {
  StyledHeader,
  StyledHeaderInner,
  StyledHeaderLogo,
  StyledHeaderLink
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
        {/* <StyledHeaderLink exact to="/">
          Home
        </StyledHeaderLink> */}
        <StyledHeaderLink to="/all-streams">All Streams</StyledHeaderLink>
        <StyledHeaderLink to="/shedule">Schedule</StyledHeaderLink>
        <StyledHeaderLink to="/shows">Shows</StyledHeaderLink>
        <StyledHeaderLink to="/topics">Topics</StyledHeaderLink>
        <StyledHeaderLink to="/discover">Discover</StyledHeaderLink>
        <Button label="Donate" />
      </div>
    </StyledHeaderInner>
  </StyledHeader>
);

export default Header;
