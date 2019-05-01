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
        <StyledHeaderLink to="/shows/4">Shows</StyledHeaderLink>
        <StyledHeaderLink to="/episode">Episode</StyledHeaderLink>
        <StyledHeaderLink to="/story">Story</StyledHeaderLink>
        <Button label="Donate" />
      </div>
    </StyledHeaderInner>
  </StyledHeader>
);

export default Header;
