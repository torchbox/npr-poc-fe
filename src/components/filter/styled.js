import styled from "styled-components";

const StyledFilter = styled.div`
  background: ${props => props.theme.colors.lightGrey};
`;

const StyledFilterInner = styled.div`
  margin: 0 auto;
  padding: 60px ${props => props.theme.grid.outerGutter} 15px;
  max-width: ${props => props.theme.grid.maxWidth};
`;

const StyledFilterButtons = styled.div`
  display: flex;
  align-items: center;
`;

const StyledFilterButton = styled.div`
  margin: 0 10px 0 0;
  padding: 5px 7px;
  font-size: 14px;
  font-weight: ${props => props.theme.fonts.light};
  border-radius: 3px;
  border: 1px solid
    ${props => (props.isActive ? props.theme.colors.blue : "transparent")};
  background: ${props => (props.isActive ? props.theme.colors.white : "none")};
  cursor: pointer;

  &:hover {
    border-color: ${props => props.theme.colors.blue}
  }
`;

const StyledFilterTitle = styled.div`
  margin: 0 20px 0 0;
  font-size: 14px;
  font-weight: ${props => props.theme.fonts.bold};
  color: ${props => props.theme.colors.blue};
`;

export {
  StyledFilter,
  StyledFilterInner,
  StyledFilterButtons,
  StyledFilterButton,
  StyledFilterTitle
};
