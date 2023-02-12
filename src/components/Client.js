import { Container } from "@mui/material";
import React from "react";
import "./index.css";

const Client = () => {
  return (
    <>
      <Container maxWidth="lg" className="my-[3rem]">
        <p className="text-[12px] uppercase text-center font-[300] opacity-60 tracking-[2px]">
          LIST OF OUR
        </p>
        <h1 className="text-center uppercase text-[2rem] ">CLIENTELE</h1>
        <div className="grid lg:grid-cols-5 grid-flow-row   md:grid-cols-2 gap-2 lg:my-[4rem] md:my-0 my-[2rem]  ">
          {clientLogo.map((item, i) => {
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
        <div className="flex justify-center lg:my-0 md:my-4">
          <p className="border-[1px] border-[black] text-black w-[130px] text-center p-2 uppercase browse-app font-[300] text-[13px]">
            browsw all
          </p>
        </div>
      </Container>
    </>
  );
};

export default Client;

const clientLogo = [
  {
    url: "./assests/Client-logo/logo-1.jpg",
  },
  {
    url: "./assests/Client-logo/logo-2.jpg",
  },
  {
    url: "./assests/Client-logo/logo-3.jpg",
  },
  {
    url: "./assests/Client-logo/logo-2.jpg",
  },
  {
    url: "./assests/Client-logo/logo-1.jpg",
  },
];
