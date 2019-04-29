import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import { rgba } from "polished";

const StyledHeader = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 27px 73px 23px;
  background: ${props =>
    props.theme.colors.black && rgba(props.theme.colors.black, 0.5)};
`;

const StyledHeaderLogo = styled.div`
  width: 120px;
  height: 35px;

  svg {
    width: 100%;
    height: 100%;
    margin-top: -5px;
  }
`;

const StyledHeaderLink = styled(NavLink)`
  margin: 0 25px 0 0;
  font-size: 16px;
  color: ${props => props.theme.colors.white};
  font-weight: ${props => props.theme.fonts.bold};
  text-decoration: none;

  &::after {
    content: "/";
    display: inline-block;
    margin-left: 25px;
    color: ${props => props.theme.colors.white};
  }

  &:last-of-type {
    &::after {
      display: none;
    }
  }

  &.active {
    color: ${props => props.theme.colors.green};
  }
`;

export { StyledHeader, StyledHeaderLogo, StyledHeaderLink };
