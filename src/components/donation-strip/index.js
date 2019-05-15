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
        <p>Your gift will help keep Torchbox Public Radio on air…</p>
        <StyledDonationStripLinks>
          <StyledDonationStripLink to="donation">
            Make a donation
          </StyledDonationStripLink>
          <StyledDonationStripLink to="about">
            About Torchbox Radio
          </StyledDonationStripLink>
        </StyledDonationStripLinks>
      </StyledDonationStripInner>
    </StyledDonationStrip>
  );
};

export default DonationStrip;
