import React from "react";

import {
  StyledFooter,
  StyledFooterInner,
  StyledFooterAbout,
  StyledFooterHeading,
  StyledFooterText
} from "./styled";

const Footer = ({ visibility }) => (
  <StyledFooter visiblity={visibility}>
    <StyledFooterInner>
      <StyledFooterAbout>
        <StyledFooterHeading>{process.env.REACT_APP_SITE_NAME}</StyledFooterHeading>
        <StyledFooterText>
          Listener-supported {process.env.REACT_APP_SITE_NAME} is the home for independent journalism and
          courageous conversation on air and online. Broadcasting live from New
          York City on 93.9 FM and AM 820 and available online and on the go.
        </StyledFooterText>
        <StyledFooterText>
          © {process.env.REACT_APP_SITE_NAME} 2019
        </StyledFooterText>
      </StyledFooterAbout>
    </StyledFooterInner>
  </StyledFooter>
);

export default Footer;
