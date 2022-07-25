import styled from "styled-components";
import { ReactComponent as Linkedin } from "../../../assets/svg/footer/links/linkedin.svg";
import { ReactComponent as Twitter } from "../../../assets/svg/footer/links/twitter.svg";
import { ReactComponent as Facebook } from "../../../assets/svg/footer/links/facebook.svg";
import { ReactComponent as Pinterest } from "../../../assets/svg/footer/links/pinterest.svg";

export const UlStyled = styled.ul`
  position: absolute;
  top: 79px;
  left: 343px;
  width: 127px;
  height: 17px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LinkedinSvg = styled(Linkedin)`
  fill: #696969;
  :hover,
  :focus {
    fill: #f472b7;
  }
`;

export const TwitterSvg = styled(Twitter)`
  fill: #696969;
  :hover,
  :focus {
    fill: #f472b7;
  }
`;

export const FacebookSvg = styled(Facebook)`
  fill: #696969;
  :hover,
  :focus {
    fill: #f472b7;
  }
`;

export const PinterestSvg = styled(Pinterest)`
  fill: #696969;
  :hover,
  :focus {
    fill: #f472b7;
  }
`;
