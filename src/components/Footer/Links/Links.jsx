import React from "react";
import {
  UlStyled,
  LinkedinSvg,
  TwitterSvg,
  FacebookSvg,
  PinterestSvg,
} from "./Links.styled";

const Links = () => {
  return (
    <UlStyled>
      <li>
        <a href="https://www.linkedin.com/">
          <LinkedinSvg />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/">
          <TwitterSvg />
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com">
          <FacebookSvg />
        </a>
      </li>
      <li>
        <a href="https://www.pinterest.com">
          <PinterestSvg />
        </a>
      </li>
    </UlStyled>
  );
};

export default Links;
