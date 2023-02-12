import React from "react";
import Contact from "../../components/Contact";
import Header from "../Intenship/components/Header";
import Associted from "./components/Associted";
import HeroSection from "./components/HeroSection";
import IntenshipBlogs from "./components/IntenshipBlogs";
import LastSectionBlogs from "./components/LastSectionBlogs";
import Question from "../../components/Question";

const index = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <IntenshipBlogs />
      <Associted />
      <LastSectionBlogs />
      <Question />
      <Contact />
    </>
  );
};

export default index;
