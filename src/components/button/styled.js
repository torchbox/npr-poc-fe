import styled, { css } from "styled-components";

const StyledButton = styled.button`
  padding: 7px 25px;
  font-size: 14px;
  font-weight: ${props => props.theme.fonts.bold};
  color: ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.coral};
  border-radius: 5px;
  border: none;

  &:hover {
    cursor: pointer;
  }

  ${process.env.REACT_APP_SITE_SLUG === "wbgo-radio" &&
    css`
      background: #9d3393;
    `}
`;

export default StyledButton;
