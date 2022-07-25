import React from "react";
import Form from "../Form/Form";
import {
  MainBackgroundImage,
  YellowUpLeftStyled,
  YellowCenterStyled,
  RedCenterStyled,
  BackgroundEclispseStyled,
  CloudOneStyled,
  CloudTwoStyled,
  CloudThreeStyled,
  CloudFourStyled,
  CloudFiveStyled,
  CloudSixStyled,
  CloudSevenStyled,
  CloudEightStyled,
  CloudNineStyled,
} from "./Main.style";
import YellowUpLeft from "../../assets/svg/yellowUpLeft.svg";
import YellowCenter from "../../assets/svg/yellowCenter.svg";
import RedCenter from "../../assets/svg/redCenter.svg";
import Ellispe from "../../assets/svg/ellipse.svg";
import CloudOne from "../../assets/svg/clouds/cloud-one.svg";
import CloudTwo from "../../assets/svg/clouds/cloud-two.svg";
import CloudThree from "../../assets/svg/clouds/cloud-three.svg";
import CloudFour from "../../assets/svg/clouds/cloud-four.svg";
import CloudFive from "../../assets/svg/clouds/cloud-five.svg";
import CloudSix from "../../assets/svg/clouds/cloud-six.svg";
import CloudSeven from "../../assets/svg/clouds/cloud-seven.svg";
import CloudEight from "../../assets/svg/clouds/cloud-eight.svg";
import CloudNine from "../../assets/svg/clouds/cloud-nine.svg";

const Main = () => {
  return (
    <main>
      <YellowUpLeftStyled src={YellowUpLeft} alt="Yellow Up Left Svg" />
      <YellowCenterStyled src={YellowCenter} alt="YellowCenter" />
      <RedCenterStyled src={RedCenter} alt="RedCenter" />
      <BackgroundEclispseStyled src={Ellispe} alt="Ellispe" />
      <CloudOneStyled src={CloudOne} alt="CloudOne" />
      <CloudTwoStyled src={CloudTwo} alt="CloudTwo" />
      <CloudThreeStyled src={CloudThree} alt="CloudThree" />
      <CloudFourStyled src={CloudFour} alt="CloudFour" />
      <CloudFiveStyled src={CloudFive} alt="CloudFive" />
      <CloudSixStyled src={CloudSix} alt="CloudSix" />
      <CloudSevenStyled src={CloudSeven} alt="CloudSeven" />
      <CloudEightStyled src={CloudEight} alt="CloudEight" />
      <CloudNineStyled src={CloudNine} alt="CloudNine" />
      <Form />
      <MainBackgroundImage></MainBackgroundImage>
    </main>
  );
};

export default Main;
