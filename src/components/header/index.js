import React from "react";

import { StyledHeader, StyledHeaderLogo, StyledHeaderLink } from "./styled";

import TorchboxLogo from '../../svg/torchbox-logo';

import Button from "../button";

const Header = () => (
  <StyledHeader>
    <>
    <StyledHeaderLogo>
      <TorchboxLogo />
    </StyledHeaderLogo>
    <div>
      <StyledHeaderLink exact to="/">Home</StyledHeaderLink>
      <StyledHeaderLink to="/podcast">Podcast</StyledHeaderLink>
      <StyledHeaderLink to="/episode">Episode</StyledHeaderLink>
      <StyledHeaderLink to="/story">Story</StyledHeaderLink>
      <Button label="Donate" />
    </div>
    </>
  </StyledHeader>
);

export default Header;
