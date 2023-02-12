import { Container } from "@mui/system";
import React from "react";
import "./index.css";

const howwework = () => {
  return (
    <div className="how-we-work">
      <Container maxWidth="lg ">
        <div className=" px-[2rem] pt-[10rem]">
          <div className="bg-gradient  m-[4rem]">
            <div className="mx-[2rem] ">
              <h1 className="text-[white] text-[1rem] my-5">
                <span className="text-[#f6901e] text-[2rem]">
                  {" "}
                  Solution Gate QuantumTechinfo{" "}
                </span>{" "}
                enables your business to empower in holistic digital strategies,
                smart managed IT services, cyber security solution and next
                generation work force with hire – train – deploy model.
              </h1>
              <p className="text-[white]  text-[15px] py-5 opacity-60">
                used to demonstrate the visual form of a document or a typeface
                without relying on meaningful content. Lorem ipsum may be used
                as a placeholder before final copy is available used to
                demonstrate the visual form of a document or a typeface without
                relying on meaningful content. Lorem ipsum may be used as a
                placeholder before final copy is available
              </p>
              <p className="uppercase explore-technical-services border-2 text-[white] bg-[black] p-2 w-[300px] text-center my-[3rem]">
                explore technical services
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default howwework;
