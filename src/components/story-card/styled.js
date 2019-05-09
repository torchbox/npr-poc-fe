import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

const StyledStoryCard = styled.div`
  display: flex;
  background: ${props => props.theme.colors.white};
`;

const StyledStoryCardLink = styled(NavLink)`
  display: flex;
  width: 100%;
  height: 100%;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }

  &:hover h3 {
    text-decoration: underline;
  }
`;

const StyledStoryCardImage = styled.div`
  width: 55%;

  ${props =>
    props.bgImage &&
    css`
      background: url(${props => props.bgImage});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
    `}
`;

const StyledStoryCardText = styled.div`
  width: 45%;
  padding: 35px;

  span {
    display: block;
    margin: 0 0 15px 0;
    color: ${props => props.theme.colors.grey};
    font-size: 12px;
    text-transform: uppercase;
    font-weight: ${props => props.theme.fonts.bold};
  }

  p {
    margin: 0;
    color: ${props => props.theme.colors.grey};
    font-size: 16px;
    line-height: 1.4;
  }
`;

const StyledStoryCardHeader = styled.h3`
  margin: 0 0 15px 0;
  font-size: 21px;
  line-height: 1.4;
  text-transform: none;
  color: ${props => props.theme.colors.blue};
`;

export {
  StyledStoryCard,
  StyledStoryCardImage,
  StyledStoryCardText,
  StyledStoryCardHeader,
  StyledStoryCardLink
};
