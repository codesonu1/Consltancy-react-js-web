import React from "react";
import Contact from "../Contact";
import Heading from "../Heading-banner1";
import History from "../History";
import Service from "../Service";
import Howwework from "../How-we-work";
import Company from "../Company";
import Client from "../Client";
import CountUpLoop from "../Count-up";
import Bussiness from "../Bussiness";
import HeadingBanner2 from "../Heading-banner2";
import Question from "../Question";
import Testimonials from "../Testimonials";
import SwipeableTextMobileStepper from "../caracousl";
const Index = () => {
  return (
    <>
      <SwipeableTextMobileStepper />

      <History />
      <Heading />
      <Service />
      <Howwework />
      <Company />
      <CountUpLoop />
      <Client />
      <Question />
      <HeadingBanner2 />
      <Bussiness />
      <Testimonials />

      <Contact />
    </>
  );
};

export default Index;
