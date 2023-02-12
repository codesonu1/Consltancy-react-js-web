import { Container } from "@mui/material";
import React from "react";
import CountUp from "react-countup";

const CountUpLoop = () => {
  return (
    <div className="counter  my-5">
      <Container maxWidth="lg">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-flow-row py-[6rem]">
          {countData.map((item, i) => {
            return (
              <div key={item.value}>
                <CountUp start={0} end={item.value} delay={2}>
                  {({ countUpRef }) => (
                    <div>
                      <div
                        ref={countUpRef}
                        className="text-[white] text-[3rem] text-center"
                      ></div>
                      <p className="text-white my-2 capitalize font-[300] text-center ">
                        {item.name}
                      </p>
                    </div>
                  )}
                </CountUp>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

const countData = [
  {
    name: "Satisfied Clients",
    value: 98,
  },
  {
    name: "Business Consultants",
    value: 60,
  },
  {
    name: "On Time Delivery",
    value: 100,
  },
  {
    name: "No. of Clients   ",
    value: 300,
  },
];

console.log(countData);

export default CountUpLoop;
