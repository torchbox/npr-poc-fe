import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

const StyledDonationStrip = styled.div`
  overflow: hidden;
  margin: -53px 0 -53px 0;
`;

const StyledDonationStripInner = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 35px ${props => props.theme.grid.outerGutter};
  max-width: ${props => props.theme.grid.maxWidth};
  color: ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.coral};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 100%;
    height: 100%;
    width: 100vw;
    background: ${props => props.theme.colors.coral};

    ${process.env.REACT_APP_SITE_SLUG === "wbgo-radio" &&
    css`
      background: #25408f;
    `}
  }

  p {
    margin: 0;
    font-size: 25px;
    line-height: 1.2;
    font-weight: ${props => props.theme.fonts.light};
  }

  ${process.env.REACT_APP_SITE_SLUG === "wbgo-radio" &&
    css`
      background: #25408f;
    `}
`;

const StyledDonationStripLinks = styled.div``;

const StyledDonationStripLink = styled(NavLink)`
  margin: 0 30px 0 0;
  font-size: 18px;
  color: ${props => props.theme.colors.white};
  font-weight: ${props => props.theme.fonts.bold};
  text-decoration: none;

  &::after {
    content: "/";
    display: inline-block;
    margin-left: 30px;
    color: ${props => props.theme.colors.white};
  }

  &:last-of-type {
    margin-right: 0;

    &::after {
      display: none;
    }
  }

  &:hover,
  &:focus,
  &.active {
    color: ${props => props.theme.colors.blue};
  }
`;

export {
  StyledDonationStrip,
  StyledDonationStripInner,
  StyledDonationStripLinks,
  StyledDonationStripLink
};
