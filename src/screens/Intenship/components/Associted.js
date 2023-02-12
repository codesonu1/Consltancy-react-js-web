import { Container } from "@mui/material";
import React from "react";

import { MdAllInbox, MdDinnerDining, MdMediaBluetoothOn } from "react-icons/md";
import { CiPlug1 } from "react-icons/ci";

const Associted = () => {
  return (
    <div className="bg-[black]">
      <Container className="my-[3rem]">
        <p className="text-[12px] uppercase text-center    tracking-[2px] text-[#F4901E] pt-[2rem]">
          LIST OF INDUSTRIES
        </p>
        <h1 className="text-center uppercase text-[2rem] text-[white]">
          WE ARE ASSOCIATED WITH
        </h1>
        <div className="grid grid-flow-row lg:grid-cols-4 md:grid-cols-2 gap-4 my-[3rem] px-3">
          {associtedDetails.map((item, i) => {
            return (
              <div className="bg-[#3d3d3d] text-center rounded-[2px] mb-[2rem]">
                <div className="flex justify-center mt-[3rem] mb-[1rem]">
                  <h1 className="text-[3rem] text-[#F4901E]  ">{item.icon}</h1>
                </div>

                <p
                  className="text-[1.2rem] font-[400] capitalize text-[white] pb-[3rem]
                "
                >
                  {item.name}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Associted;

const associtedDetails = [
  {
    icon: <MdAllInbox />,
    name: "Marketing & Advertising",
  },
  {
    icon: <CiPlug1 />,
    name: "Energy",
  },
  {
    icon: <MdDinnerDining />,
    name: "Food Services",
  },
  {
    icon: <MdMediaBluetoothOn />,
    name: "Media & Publication",
  },
  {
    icon: <MdAllInbox />,
    name: "Marketing & Advertising",
  },
  {
    icon: <CiPlug1 />,
    name: "Energy",
  },
  {
    icon: <MdDinnerDining />,
    name: "Food Services",
  },
  {
    icon: <MdMediaBluetoothOn />,
    name: "Media & Publication",
  },
  {
    icon: <MdAllInbox />,
    name: "Marketing & Advertising",
  },
  {
    icon: <CiPlug1 />,
    name: "Energy",
  },
  {
    icon: <MdDinnerDining />,
    name: "Food Services",
  },
  {
    icon: <MdMediaBluetoothOn />,
    name: "Media & Publication",
  },
];
