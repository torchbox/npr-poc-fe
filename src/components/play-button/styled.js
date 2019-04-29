import styled from "styled-components";

const StyledPlayButton = styled.button`
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
`;

export { StyledPlayButton };
