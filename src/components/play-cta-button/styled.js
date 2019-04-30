import styled, { css } from "styled-components";

const StyledPlayCtaButton = styled.button`
  position: relative;
  padding: 16px 30px 16px 56px;
  font-size: 17px;
  line-height: 1;
  background: ${props => props.theme.colors.green};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  svg {
    position: absolute;
    top: 50%;
    left: 27px;
    width: 24px;
    height: 24px;
    transform: translate(-50%, -50%);
  }

  ${props =>
    props.type &&
    props.type === "ghost" &&
    css`
      padding: 10px 10px 10px 40px;
      font-size: 12px;
      color: ${props => props.theme.colors.white};
      background: none;
      border: 1px solid ${props => props.theme.colors.green};

      svg {
        left: 20px;
        width: 18px;
        height: 18px;
      }
    `}

    ${props =>
      props.type &&
      props.type === "white" &&
      css`
        padding: 10px 10px 10px 40px;
        font-size: 12px;
        color: ${props => props.theme.colors.blue};
        background: none;
        border: 1px solid ${props => props.theme.colors.blue};

        svg {
          left: 20px;
          width: 18px;
          height: 18px;
        }
      `}
`;

const StyledPlayCtaButtonName = styled.span`
  font-weight: ${props => props.type === "white" ? '' : props.theme.fonts.bold};
  margin: 0;
`;

export { StyledPlayCtaButton, StyledPlayCtaButtonName };
