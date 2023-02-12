import { Container } from "@mui/material";
import React from "react";

const Headers = () => {
  return (
    <>
      <div className="bg-[#F4901E] ">
        <Container>
          <div className=" text-center grid grid-flow-row lg:grid-cols-2 py-4">
            <span className="text-white text-[1.3rem]">career</span>
            <p className="capitalize">
              <span className="text-[white] px-2">home</span>{" "}
              <span> {" > "}</span>{" "}
              <span className="text-black px-2">career</span>
            </p>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Headers;
