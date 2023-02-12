import React from "react";
import Rating from "./Rating";
import { Container } from "@mui/material";

const Testimonials = () => {
  return (
    <>
      <div className="bg-[#f7f7f7] p-3">
        <Container maxWidth="lg" className="">
          <div className="my-5">
            <p className="text-[12px] uppercase text-center font-[300] opacity-60 tracking-[2px]">
              CLEINT'S FEEDBACKS
            </p>
            <h1 className="text-center uppercase text-[2rem] ">TESTIMONIALS</h1>
          </div>
          <div className="grid lg:grid-cols-3 grid-flow-row gap-4">
            {TestimonialsData.slice(0, 3).map((item, i) => {
              return (
                <div className="border-2 bg-[white] w-auto h-auto">
                  <div className="flex justify-center my-3">
                    <img src={item.img} alt={item.name} className=""></img>
                  </div>
                  <Rating RatingValue={item.rating} />
                  <p className="px-3 py-4 text-1.2rem text-justify font-[400] w-auto lg:h-[180px]">
                    {item.description}
                  </p>
                  <hr></hr>
                  <h5 className="text-center uppercase p-4 opacity-50  ">
                    {item.name}
                  </h5>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center my-5">
            <p className="border-[1px] border-[black] text-black w-[130px] text-center p-2 uppercase browse-app font-[300] text-[13px]">
              views all
            </p>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Testimonials;

const TestimonialsData = [
  {
    img: "./assests/Testimonals/logo-1.jpg",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    name: "sunajay das",
    rating: 1,
  },
  {
    img: "./assests/Testimonals/logo-2.jpg",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    name: "anil shah",
    rating: 2.5,
  },
  {
    img: "./assests/Testimonals/logo-3.jpg",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    name: "nanu khan",
    rating: 3,
  },
  {
    img: "./assests/Testimonals/logo-3.jpg",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    name: "nanu khan",
    rating: 4,
  },
];
