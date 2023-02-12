import { Container } from "@mui/material";
import React, { useState } from "react";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MessageIcon from "@mui/icons-material/Message";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import "./index.css";

const Contact = () => {
  const [data, setData] = useState({
    FullName: "",
    Contact: "",
    Email: "",
    Certificates: "",
    Enquiry: "",
  });

  function OnchangedValue(e) {
    const { name, value } = e.target;
    setData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
    e.preventDefault();
  }

  const defaultProps = {
    options: certificates,
    getOptionLabel: (option) => option.title,
  };
  return (
    <>
      <div className="bg-[black]">
        <Container maxWidth="lg">
          <div className="grid lg:grid-cols-2 grid-flow-row gap-[2rem]">
            <div className="lg:my-[7rem]">
              <h2 className="uppercase text-[1.6rem] my-[3rem] text-[white]  ">
                <span className="text-[#f6901e]">request</span> a call back
              </h2>
              <p className="text-[white] text-justify opacity-50">
                Would you like to speak to one of our consultants over the
                phone? Just submit your details and we’ll be in touch shortly.
                You can also email us if you would prefer.
              </p>

              <div className="flex my-5">
                <MyLocationIcon className="text-[#f6901e] my-3 contact-icon " />

                <div className="  px-4">
                  <h6 className="text-[#f6901e]">Corporate Address</h6>
                  <p className="text-[white]">
                    Minbhawan, New Baneshwor, Kathmandu, Nepal
                  </p>
                </div>
              </div>
              <hr className="opacity-60 my-2"></hr>
              <div className="flex my-5">
                <div>
                  <MailOutlineIcon className="text-[#f6901e] my-3 contact-icon" />
                </div>
                <div className="  px-4">
                  <h6 className="text-[#f6901e]">General Enquiries</h6>
                  <p className="text-[white]">info@nrsnepal.com</p>
                </div>
              </div>
              <hr className="opacity-60 my-2"></hr>
              <div className="flex my-5">
                <div>
                  <MessageIcon className="text-[#f6901e] my-3 contact-icon" />
                </div>
                <div className="  px-4">
                  <h6 className="text-[#f6901e]">Business Phone</h6>
                  <p className="text-[white]">+977-14106579 / +977-014106917</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="border-2 bg-[white] rounded-sm w-full lg:my-[9rem]  lg:mx-[2rem] ">
                <h1 className="p-5 opacity-70 font-[400] text-[1rem]">
                  I would like to discuss...
                </h1>
                <div className="lg:m-5 lg:flex gap-3">
                  <div className="lg:m-0 sm:m-0 m-5">
                    <TextField
                      name="FullName"
                      value={data.FullName}
                      onChange={OnchangedValue}
                      required
                      id="outlined-required"
                      type="text"
                      label="Full Name"
                    />
                  </div>
                  <div className="lg:m-0 sm:m-0 m-5 ">
                    <TextField
                      name="Contact"
                      value={data.Contact}
                      onChange={OnchangedValue}
                      required
                      id="outlined-required"
                      type="number"
                      label="Contact"
                    />
                  </div>
                </div>
                <div className="m-5">
                  <TextField
                    name="Email"
                    value={data.Email}
                    onChange={OnchangedValue}
                    required
                    id="outlined-required"
                    type="text"
                    className="w-full"
                    label="Email"
                  />
                </div>
                <div className=" m-5">
                  <Autocomplete
                    {...defaultProps}
                    id="outlined"
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        name="Certificates"
                        value={data.Certificates.id}
                        onChange={OnchangedValue}
                        label="ISO Standar Certificate"
                        id="outlined-required"
                      />
                    )}
                  />
                </div>
                <div className="m-5   ">
                  <TextField
                    name="Enquiry"
                    value={data.Enquiry}
                    onChange={OnchangedValue}
                    required
                    id="outlined-required"
                    type="text"
                    className="w-full"
                    label="Enter your Enquiry in Details"
                  />
                </div>
                <div className="justify-center flex">
                  <p className="border-2 w-[200px] h-auto p-[12px] rounded-md text-center bg-[black] text-[white] capitalize ">
                    send Message
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Contact;

const certificates = [
  { id: 1, title: "Apocalypse Now" },
  { id: 2, title: "Alien" },
  { id: 3, title: "Sunset Boulevard" },
];
