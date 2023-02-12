import { Container } from "@mui/material";
import React from "react";

const HeroSection = () => {
  return (
    <>
      <Container className="my-4">
        <div className="grid lg:grid-cols-2 grid-flow-row">
          <div>
            <h5 className="capitalize pt-[4rem] px-[1.4rem] pb-[2rem] text-[1.5rem]">
              Career Counseling & Management Services
            </h5>
            <p className="px-[1.4rem] text-[0.8rem] text-justify opacity-60 capitalize">
              Career Counseling & Management Services We strive to create a
              driven and supportive culture through which talented people are
              motivated to perform at their peak for the benefit of our clients.
              We understand that we need to have a strong internal foundation,
              in order to be able to assist others.
            </p>
            <p className="px-[1.4rem] text-[0.8rem] text-justify opacity-60 capitalize py-3">
              Our people give us a competitive edge and we believe in investing
              in our people. Hence, we provide them with a range of
              opportunities that further develops their skills and helps them
              achieve their goals.
            </p>
          </div>
          <div>
            <img src="./assests/intenship/img-1.jpg" alt=""></img>
          </div>
          <div>
            <img src="./assests/intenship/img-1.jpg" alt=""></img>
          </div>
          <div>
            <h5 className="capitalize pt-[2rem] px-[1.4rem] pb-[2rem] text-[2rem]">
              Through a rigorous application process, we select creative and
              hard-working individuals with a global mindset to join our team...
            </h5>
            <p className="px-[1.4rem] text-[0.8rem] text-justify opacity-60 capitalize">
              All vacancies will be posted on our website, so we urge you to
              periodically visit this page.
            </p>
            <p className="px-[1.4rem] text-[0.8rem] text-justify opacity-60 capitalize py-3">
              If you have any questions about the application process, please
              email info@nrsnepal.com. Thank you for exploring job opportunities
              with us. We look forward to reviewing your application soon.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default HeroSection;
