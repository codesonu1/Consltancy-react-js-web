import React from "react";
import { Container } from "@mui/material";

const IntenshipBlogs = () => {
  return (
    <>
      <Container className="mt-[4rem]">
        <div className="grid md:grid-cols-2 grid-flow-row">
          <div>
            <img src="./assests/intenship/img-2.jpg" alt=""></img>
          </div>
          <div>
            <h5 className="capitalize pt-[2rem] px-[1.4rem] pb-[2rem] text-[1.5rem]">
              What is it like to work as an Intern in Nepal?
            </h5>
            <p className="px-[1.4rem] text-[0.8rem] text-justify opacity-60 capitalize">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available. IT &
              Engineering and Social Service etc. The Government is keen to
              develop the country and has introduced various projects. Interning
              in Nepal will enable you to learn local culture and gain knowledge
              on local and global issues and make a difference in society. An
              opportunity to work closely with clients will help to understand
              the ground realities. A country with rich heritage, culture and
              people here in Nepal are heart-warming and welcoming.
            </p>
          </div>

          <div>
            <h5 className="capitalize pt-[2rem] px-[1.4rem] pb-[2rem] text-[1.5rem]">
              Why choose{" "}
              <span className="text-[#f6901e]">Nepal Realistic Solution</span>{" "}
              for Internship?
            </h5>
            <p className="px-[1.4rem] text-[0.8rem] text-justify opacity-60 capitalize">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available. work
              culture under expert team. The enabling work environment,
              extensive research in a chosen field, opportunity to work on
              projects, practical work experience, public speaking, develop
              interpersonal and communication skills will boost the confidence
              of the individual. We provide a platform to work with different
              industries and gain practical knowledge. The experience gained
              will definitely add value and put your step closer of a dream
              career. As our clients are based in different regions you will
              have the opportunity to travel and work together.
            </p>
          </div>
          <div>
            <img src="./assests/intenship/img-3.jpg" alt=""></img>
          </div>
        </div>
      </Container>
    </>
  );
};

export default IntenshipBlogs;
