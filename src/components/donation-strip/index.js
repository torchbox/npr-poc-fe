import React from "react";

import {
  StyledDonationStrip,
  StyledDonationStripInner,
  StyledDonationStripLink,
  StyledDonationStripLinks
} from "./styled";

const DonationStrip = () => {
  return (
    <StyledDonationStrip>
      <StyledDonationStripInner>
        <p>We’re a charity, and can only continue to run with your help… </p>
        <StyledDonationStripLinks>
          <StyledDonationStripLink to="about">
            About Torchbox Radio
          </StyledDonationStripLink>
          <StyledDonationStripLink to="donation">
            Make a donation
          </StyledDonationStripLink>
        </StyledDonationStripLinks>
      </StyledDonationStripInner>
    </StyledDonationStrip>
  );
};

export default DonationStrip;
