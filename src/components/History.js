import { Container } from "@mui/material";
import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import "./index.css";
import { Link } from "react-router-dom";
const History = () => {
  return (
    <>
      <Container maxWidth="lg" className="my-5 ">
        <div className="grid lg:grid-cols-2 grid-flow-row">
          <div>
            <iframe
              className="rounded-[8px] w-full h-full md:w-[550px] md:mx-[5rem]"
              src="https://www.youtube.com/embed/eENvOP2unUg"
              title="  video player"
            ></iframe>
          </div>
          <div className="px-3 md:mx-[5rem]">
            <h1 className="lg:text-[1.4rem] py-3">
              <span className="text-[#f6901e] ">
                Solution Gate QuantumTechinfo (SGQ)
              </span>
              was established with a desire to bring a systematic change in
              Nepalese industry
            </h1>
            <p className="lg:text-[15px] capitalize text-justify">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available used to
              demonstrate the visual form of a document or a typeface without
              relying on meaningful content. Lorem ipsum may be used as a
              placeholder before final copy is available....
            </p>
            <a href="#">
              <div className="flex">
                <p className="my-5 uppercase history-text-btn">
                  our company History
                </p>
                <ArrowRightAltIcon className="mt-5 text-[#f6901e]" />
              </div>
            </a>
          </div>
        </div>
      </Container>
    </>
  );
};

export default History;
