import { Container } from "@mui/material";
import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const HeroSection = () => {
  return (
    <>
      <Container className="my-4">
        <div className="grid lg:grid-cols-2 grid-flow-row">
          <div>
            <h5 className="capitalize pt-[6rem] px-[1.4rem] pb-[2rem] text-[1.5rem]">
              what is intenship?
            </h5>
            <p className="px-[1.4rem] text-[0.8rem] text-justify opacity-60 capitalize">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available.
            </p>
            <p className="py-[2rem]">
              <span className="px-[1.4rem] text-[0.8rem]  text-justify opacity-60 capitalize">
                for more details, please
              </span>{" "}
              <span className="uppercase text-[blue] text-[0.9rem] history-text-btn">
                {" "}
                SEE OUR INTERNSHIP BROCHURE
              </span>
              <ArrowRightAltIcon className="mx-2 text-[#f6901e]" />
            </p>
          </div>
          <div>
            <img src="./assests/intenship/img-1.jpg" alt=""></img>
          </div>
        </div>
      </Container>
    </>
  );
};

export default HeroSection;
