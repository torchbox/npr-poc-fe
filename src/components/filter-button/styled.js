import styled from "styled-components";

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

export {
  StyledFilterButton,
};
