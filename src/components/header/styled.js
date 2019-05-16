import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import { rgba } from "polished";

const StyledHeader = styled.nav`
  position: relative;
  width: 100%;
  background: ${props =>
    props.theme.colors.black && rgba(props.theme.colors.black, 0.5)};
  z-index: 3;

  ${process.env.REACT_APP_SITE_SLUG === "wbgo-radio" &&
    css`
      background: rgba(255, 255, 255, 0.9);
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    `}
`;

const StyledHeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 27px ${props => props.theme.grid.outerGutter} 23px;
  max-width: ${props => props.theme.grid.maxWidth};
`;

const StyledHeaderLogo = styled(NavLink)`
  width: 120px;
  height: 35px;

  svg {
    width: 100%;
    height: 100%;
    margin-top: -5px;
  }
`;

const StyledHeaderLink = styled(NavLink)`
  margin: 0 30px 0 0;
  font-size: 16px;
  color: ${props => props.theme.colors.white};
  font-weight: ${props => props.theme.fonts.bold};
  text-decoration: none;

  &::after {
    content: "/";
    display: inline-block;
    margin-left: 30px;
    color: ${props => props.theme.colors.white};

    ${process.env.REACT_APP_SITE_SLUG === "wbgo-radio" &&
      css`
        color: #d8d8d8;
      `}
  }

  &:hover,
  &:focus,
  &.active {
    color: ${props => props.theme.colors.green};
  }

  ${process.env.REACT_APP_SITE_SLUG === "wbgo-radio" &&
    css`
      color: #25408f;

      &:hover,
      &:focus,
      &.active {
        color: #f15822;
      }
    `}
`;

const StyledHeaderStaticLink = styled.span`
  margin: 0 30px 0 0;
  font-size: 16px;
  color: ${props => props.theme.colors.white};
  font-weight: ${props => props.theme.fonts.bold};
  text-decoration: none;

  &::after {
    content: "/";
    display: inline-block;
    margin-left: 30px;
    color: ${props => props.theme.colors.white};

    ${process.env.REACT_APP_SITE_SLUG === "wbgo-radio" &&
      css`
        display: none;
      `}
  }

  &:last-of-type {
    &::after {
      display: none;
    }
  }
  &:hover,
  &:focus,
  &.active {
    color: ${props => props.theme.colors.green};
  }

  ${process.env.REACT_APP_SITE_SLUG === "wbgo-radio" &&
    css`
      color: #25408f;

      &:hover,
      &:focus,
      &.active {
        color: #f15822;
      }
    `}
`;

export {
  StyledHeader,
  StyledHeaderInner,
  StyledHeaderLogo,
  StyledHeaderLink,
  StyledHeaderStaticLink
};
