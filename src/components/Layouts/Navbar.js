import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import "../index.css";
import { Link } from "react-router-dom";

export default function Customnav() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div
        className="fixed   bg-[white] border-2 border-x-gray-200 h-full main-nav-bar    w-[100px] large-nav"
        style={{ width: open === true ? "200px" : "100px" }}
      >
        {actions.map((item, i) => {
          return (
            <div className="text-[black] font-[400] opacity-60  capitalize py-2 justify-content-center my-2 nav-list mx-2 main-nav-item">
              <Link to={item.url}>
                <p className="">{open === false ? null : `${item.name}`}</p>
              </Link>
            </div>
          );
        })}
        <div className="rotate-80 flex justify-center my-4 main-sub-nav-bar">
          <img src="./assests/nav-logo.png" alt=""></img>
        </div>
        <button
          onClick={open === false ? handleOpen : handleClose}
          className="border rounded-full   text-[black] p-3 fixed   left-[1rem] bottom-[1rem] main-btn-nav-bar"
        >
          {open === false ? <MenuIcon /> : <ClearIcon />}
        </button>
      </div>
      <div className="m-3 mbl-tab-nav">
        <div className="grid grid-flow-row grid-cols-2">
          <div>
            <div>
              {" "}
              <button
                className="border-2 rounded-full text-[red] bg-[white] p-2  "
                onClick={open === false ? handleOpen : handleClose}
              >
                {open === false ? <MenuIcon /> : <ClearIcon />}
              </button>
            </div>

            {actions.map((item, i) => {
              return (
                <div>
                  <Link to={item.url}>
                    <p className="w-full h-full bg-[white] leading-[3rem] ml-2 capitalize text-[black]">
                      {open === false ? null : `${item.name}`}
                    </p>
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="my-2">
            {/* <img
              src="https://qntminfo.com/images/2.png"
              alt=""
              className="w-[100px] h-[100px] border-2 rounded-full"
            ></img> */}
            <p className="uppercase font-mono font-bold text-[1rem] text-end">
              Solution Gate
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const actions = [
  { name: "home", url: "/" },
  { name: "about", url: "" },
  { name: "service", url: "" },
  { name: "intenship", url: "/intenship" },
  { name: "corporate event", url: "/corporate-events" },
  { name: "support start up", url: "" },
  { name: "100 intenship", url: "" },
  { name: "blog", url: "" },
  { name: "career", url: "/career" },
  { name: "contact", url: "" },
];
