import { Container } from "@mui/material";
import React from "react";

const Company = () => {
  return (
    <>
      <Container maxWidth="lg" className="my-[3rem]">
        <p className="text-[12px] uppercase text-center font-[300] opacity-60 tracking-[2px]">
          we work with
        </p>
        <h1 className="text-center uppercase text-[2rem] ">TOP COMPANIES</h1>
        <div className="grid lg:grid-cols-5 grid-flow-row md:grid-cols-2 gap-2 my-[4rem]  ">
          {companyLogo.map((item, i) => {
            return (
              <div
                className="border-[#f6901e] border-solid border-[1px]   rounded-[4px] md:flex md:justify-center"
                key={item.url}
              >
                <img src={item.url} alt="" className="p-3 md:w-[190px]  "></img>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default Company;

const companyLogo = [
  {
    url: "./assests/company-logo/logo-1.jpg",
  },
  {
    url: "./assests/company-logo/logo-2.jpg",
  },
  {
    url: "./assests/company-logo/logo-3.jpg",
  },
  {
    url: "./assests/company-logo/logo-2.jpg",
  },
  {
    url: "./assests/company-logo/logo-1.jpg",
  },
];
