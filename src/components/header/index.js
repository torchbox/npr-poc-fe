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
      <StyledHeaderLogo>
        <TorchboxLogo />
      </StyledHeaderLogo>
      <div>
        <StyledHeaderLink exact to="/">
          Home
        </StyledHeaderLink>
        <StyledHeaderLink to="/shows/10-things-scare-me">Shows</StyledHeaderLink>
        <StyledHeaderLink to="/shows/10-things-scare-me/libby-callaway">Episode</StyledHeaderLink>
        <StyledHeaderLink to="/story">Story</StyledHeaderLink>
        <Button label="Donate" />
      </div>
    </StyledHeaderInner>
  </StyledHeader>
);

export default Header;
