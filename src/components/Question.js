import { Container } from "@mui/material";
import React from "react";
import Accordion from "./Accordion";

const Question = () => {
  return (
    <>
      <div className="bg-[#f7f7f7] p-3">
        <Container maxWidth="lg" className="">
          <div className="my-5">
            <p className="text-[12px] uppercase text-center font-[300] opacity-60 tracking-[2px]">
              MOST FREQUENTLY ASKED
            </p>
            <h1 className="text-center uppercase text-[2rem] ">Question</h1>
            <div className="grid lg:grid-cols-2 text-center grid-flow-row gap-3 my-[4rem]">
              <div>
                <Accordion />
              </div>
              <div>
                <img src="./assests/faq-bg.png" alt=""></img>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Question;
