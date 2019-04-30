import styled from "styled-components";

const StyledFooter = styled.footer`
  background: ${props => props.theme.colors.white};
  height: 400px;
`;

const StyledFooterInner = styled.div`
  max-width: ${props => props.theme.grid.maxWidth};
  margin: 0 auto;
  padding: 80px ${props => props.theme.grid.outerGutter};
`;

const StyledFooterAbout = styled.div`
  max-width: 480px;
`;

const StyledFooterHeading = styled.h3`
  font-size: 16px;
  font-weight: ${props => props.theme.fonts.bold};
  color: ${props => props.theme.colors.blue};
  text-transform: uppercase;
`;

const StyledFooterText = styled.p`
  font-size: 16px;
  color: ${props => props.theme.colors.grey};
  line-height: 22px;
`;

export { StyledFooter, StyledFooterInner, StyledFooterAbout, StyledFooterHeading, StyledFooterText };
