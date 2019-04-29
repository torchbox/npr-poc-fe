import styled from "styled-components";

const StyledPlayCtaButton = styled.button`
  width: 14px;
  height: 14px;
  border: none;
  border-radius: 5px;
  background: none;

  svg {
    position: absolute;
    top: 50%;
    left: 27px;
    width: 24px;
    height: 24px;
    transform: translate(-50%, -50%);
  }
`;

export { StyledPlayCtaButton };
