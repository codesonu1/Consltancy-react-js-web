import { Container } from "@mui/material";
import React from "react";
import "./index.css";
const Service = () => {
  return (
    <>
      <Container maxWidth="lg" className="my-[3rem]">
        <p className="text-[12px] uppercase text-center font-[300] opacity-60 tracking-[2px]">
          best of ours
        </p>
        <h1 className="text-center uppercase text-[2rem] ">CORE SERVICES</h1>
        <div className="grid lg:grid-cols-3 grid-flow-row gap-[2rem] md:grid-cols-1">
          {details.map((item, i) => {
            return (
              <div key={item.name}>
                <div className="md:flex md:justify-center">
                  <img
                    src={item.img}
                    className="rounded-sm md:w-[400px]  "
                    alt=""
                  ></img>
                </div>

                <h3 className="text-center uppercase my-5 font-[500]">
                  {item.name}
                </h3>
                <p className="text-justify   lg:text-start md:text-center md:px-[5rem] lg:px-0  ">
                  {item.description}
                </p>
                <p className="border-2 p-1 bg-[white] text-[blck] opacity-30 w-[180px] border-[black]  text-center rounded-md uppercase my-3 explore-btn md:relative lg:left-0 md:left-[16rem]">
                  explore more
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center my-3">
          <p className="border-[1px] border-[black] text-black w-[130px] text-center p-2 uppercase browse-app font-[300] text-[13px]">
            browsw all
          </p>
        </div>
      </Container>
    </>
  );
};

export default Service;
const details = [
  {
    img: "./assests/human-resources.jpg",
    name: "human resources",
    description:
      "Over the last ten years, Human Resources Management has evolved dramatically with an increasing need for improvement.",
  },
  {
    img: "./assests/acounting-finicial.jpg",
    name: "accounting finicial",
    description:
      "Over the last ten years, Human Resources Management has evolved dramatically with an increasing need for improvement.",
  },
  {
    img: "./assests/conslatncy.jpg",
    name: "conslatancy ",
    description:
      "Over the last ten years, Human Resources Management has evolved dramatically with an increasing need for improvement.",
  },
  {
    img: "./assests/education-tranning.jpg",
    name: "education tranning",
    description:
      "Over the last ten years, Human Resources Management has evolved dramatically with an increasing need for improvement.",
  },
  {
    img: "./assests/research-development.jpg",
    name: "rearch develpment",
    description:
      "Over the last ten years, Human Resources Management has evolved dramatically with an increasing need for improvement.",
  },
  {
    img: "./assests/certified.jpg",
    name: "certified",
    description:
      "Over the last ten years, Human Resources Management has evolved dramatically with an increasing need for improvement.",
  },
];
