import React from "react";
import {
  FooterStyled,
  RedFooterStyled,
  GreenFooterStyled,
  YellowFooterStyled,
} from "./Footer.styled";
import RedFooterSvg from "../../assets/svg/footer/red-footer.svg";
import GreenFooterSvg from "../../assets/svg/footer/green-footer.svg";
import YellowFooterSvg from "../../assets/svg/footer/yellow-footer.svg";
import Links from "./Links/Links";

const Footer = () => {
  return (
    <FooterStyled>
      <RedFooterStyled src={RedFooterSvg} alt="RedFooterSvg" />
      <GreenFooterStyled src={GreenFooterSvg} alt="GreenFooterSvg" />
      <YellowFooterStyled src={YellowFooterSvg} alt="YellowFooterSvg" />
      <Links />
    </FooterStyled>
  );
};

export default Footer;
