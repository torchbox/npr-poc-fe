import React from "react";

import {
  StyledDonationStrip,
  StyledDonationStripInner,
  StyledDonationStripLink,
  StyledDonationStripLinks
} from "./styled";

const DonationStrip =
() => {
  return (
    <StyledDonationStrip>
      <StyledDonationStripInner>
        <p>Your gift will help keep {process.env.REACT_APP_SITE_NAME} on air…</p>
        <StyledDonationStripLinks>
          <StyledDonationStripLink to="donation">
            Make a donation
          </StyledDonationStripLink>
          <StyledDonationStripLink to="about">
            About {process.env.REACT_APP_SITE_NAME}
          </StyledDonationStripLink>
        </StyledDonationStripLinks>
      </StyledDonationStripInner>
    </StyledDonationStrip>
  );
};

export default DonationStrip;
