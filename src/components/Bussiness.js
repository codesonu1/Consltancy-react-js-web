import { Container } from "@mui/material";
import React from "react";
import "./index.css";

const Bussiness = () => {
  return (
    <>
      <Container maxWidth="lg" className="my-[3rem]">
        <p className="text-[12px] uppercase text-center font-[300] opacity-60 tracking-[2px]">
          LIST OF NRS
        </p>
        <h1 className="text-center uppercase text-[2rem] ">BUSINESSES</h1>
        <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-flow-row gap-2 my-[4rem]  ">
          {bussinessLogo.map((item, i) => {
            return (
              <div
                className="border-[#f6901e] border-solid border-[1px]   rounded-[4px]"
                key={item.url}
              >
                <img src={item.url} alt="" className="p-3"></img>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default Bussiness;

const bussinessLogo = [
  {
    url: "./assests/Bussiness-logo/logo-1.jpg",
  },
  {
    url: "./assests/Bussiness-logo/logo-2.jpg",
  },
  {
    url: "./assests/Bussiness-logo/logo-3.jpg",
  },
  {
    url: "./assests/Bussiness-logo/logo-2.jpg",
  },
  {
    url: "./assests/Bussiness-logo/logo-1.jpg",
  },
];
