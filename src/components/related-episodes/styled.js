import styled from "styled-components";

const StyledRelated = styled.div`
  background: ${props => props.theme.colors.lightGrey};
`;

const StyledRelatedInner = styled.div`
  margin: 0 auto;
  padding: 122px ${props => props.theme.grid.outerGutter} 100px;
  max-width: ${props => props.theme.grid.maxWidth};

  h2 {
    font-size: 16px;
    color: ${props => props.theme.colors.blue};
    text-transform: uppercase;
    margin: 0 0 30px 0;
  }
`;

export {
  StyledRelated,
  StyledRelatedInner,
}
