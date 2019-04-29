import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const StyledHeader = styled.nav`
  color: ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.black};
`;

const StyledHeaderLink = styled(Link)`
  color: ${props => props.theme.colors.white};
`;

export { StyledHeader, StyledHeaderLink };
