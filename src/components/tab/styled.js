import styled from "styled-components";

const StyledTab = styled.div`
  margin: 0 50px 0 0;
  padding: 0 0 10px 0;
  font-size: 15px;
  line-height: 18px;
  color: ${props => props.theme.colors.white}
  text-transform: uppercase;
  font-weight: ${props => props.theme.fonts.bold};
  border-bottom: 5px solid ${props => (props.isActive ? props.theme.colors.lightGrey : "transparent")};
  letter-spacing: 2px;

  span {
    margin: 0 0 0 5px;
    font-weight: normal;
  }
`;

export { StyledTab };
