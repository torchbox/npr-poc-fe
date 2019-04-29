import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { rgba } from "polished";

const StyledHeader = styled.nav`
  width: 100%;
  background: ${props =>
    props.theme.colors.black && rgba(props.theme.colors.black, 0.5)};
`;

const StyledHeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 27px 73px 23px;
  max-width: ${props => props.theme.grid.maxWidth};
  box-sizing: border-box;
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
`;

export { StyledHeader, StyledHeaderInner, StyledHeaderLogo, StyledHeaderLink };
