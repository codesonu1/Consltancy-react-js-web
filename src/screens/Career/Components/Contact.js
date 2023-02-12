import { Container } from "@mui/material";
import React from "react";
import TextField from "@mui/material/TextField";
const Contact = () => {
  return (
    <>
      <div className="grid grid-cols-2 grid-flow-row">
        <div className="bg-[black] flex justify-center opacity-70">
          <div>
            <TextField
              className=""
              id="outlined-basic"
              label="enter your name"
              variant="outlined"
              placeholder="enter your name"
            />
          </div>
        </div>
        <div>1</div>
      </div>
    </>
  );
};

export default Contact;
