import React from "react";
import { Container } from "@mui/system";
import { CiFacebook } from "react-icons/ci";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiTelegramLine } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import "../index.css";

const Footer = () => {
  return (
    <>
      <Container maxWidth="lg">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-flow-row p-4 my-[3rem] gap-5">
          <div>
            <img
              src="https://qntminfo.com/images/2.png"
              className="w-[200px]"
              alt=""
            ></img>
            <p className="font-[600] text-[13px] py-2 text-[#f6901e]">
              ISO <span className="text-[#186bad]">9001 |</span> ISO{" "}
              <span className="text-[#186bad]">/</span> IEC
              <span className="text-[#186bad]">27001 Certified Company</span>
            </p>
            <p className="text-[0.9rem] text-justify my-3 opacity-60">
              We are a boutique management and technology consulting firm based
              in Kathmandu, Nepal. We offer our clients practical and creative
              solutions to their complex business challenges....
            </p>
            <div className="flex gap-3 text-[1.6rem] justify-center py-4">
              {socialIcons.map((item, i) => {
                return <span className="">{item.icon}</span>;
              })}
            </div>
          </div>

          <div>
            <h5 className="uppercase text-[0.97rem]  my-2 font-[400]">
              important links
            </h5>
            <div className="grid grid-cols-2 grid-flow-row">
              <div>
                {importantLinks.map((item, i) => {
                  return (
                    <div className="capitalize text-[0.9rem] text-justify my-3 opacity-60">
                      <p className="link">{item.link}</p>
                    </div>
                  );
                })}
              </div>
              <div>
                {subLinks.map((item, i) => {
                  return (
                    <div className="capitalize text-[0.9rem] text-justify my-3 opacity-60">
                      <p className="link">{item.link}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div>
            <h5 className="uppercase text-[0.97rem]  my-2 font-[400]">
              contact infos
            </h5>
            <div>
              <div className="capitalize text-[0.9rem] text-justify my-3 opacity-60">
                <div className="my-4">
                  <p> Nepal Realistic Solution Pvt. Ltd.</p>
                  <p> Minbhawan, New Baneshwor, Kathmandu, Nepal</p>
                </div>
                <div className="my-4">
                  <p>Email: info@nrsnepal.com </p>
                  <p> Phone: +977-14106579/ +977-014106917</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Footer;

const socialIcons = [
  {
    icon: <CiFacebook />,
  },
  {
    icon: <AiOutlineInstagram />,
  },
  {
    icon: <AiFillTwitterCircle />,
  },
  {
    icon: <RiTelegramLine />,
  },
  {
    icon: <IoLogoWhatsapp />,
  },
];

const importantLinks = [
  {
    link: "Disclaimer",
  },
  {
    link: "privacy policy",
  },
  {
    link: "our team",
  },
  {
    link: "alliance",
  },
  {
    link: "current activites",
  },
];

const subLinks = [
  {
    link: "FAQs",
  },
  {
    link: "site map  ",
  },
  {
    link: "career  ",
  },
  {
    link: "intenship",
  },
  {
    link: "education & tranning",
  },
];
