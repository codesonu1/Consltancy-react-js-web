import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      {accordionsDetails.map((item, i) => {
        return (
          <div>
            <Accordion
              expanded={expanded === item.pannel}
              onChange={handleChange(item.pannel)}
            >
              <AccordionSummary>
                <h1 className="my-2 text-start">{item.name}</h1>
              </AccordionSummary>

              <p className="p-3 text-justify">{item.description}</p>
            </Accordion>
          </div>
        );
      })}
    </div>
  );
}
const accordionsDetails = [
  {
    name: "HOW DO WE WORK?",
    pannel: "pannel1",
    description:
      "We work in a process called ‘PDCA’ which addresses the various dimensions contributing to realizing the full potential of an organization. PDCA stands for ‘Plan, Do, Check and Act’.",
  },
  {
    name: "WHEN DO YOU REQUIRE OUR SERVICES?",
    pannel: "pannel2",
    description:
      "There are many reasons one hires a consultant. The most common requirement for a consultant is when an organization needs: temporary assistance, objective review, opportunity identification & resolution, surviving a crisis, initiating change, selecting key personnel, conflict resolution, executive assistance, government regulatory assistance and while managing socio-economic/ political changes.",
  },
  {
    name: "WHERE DO WE PROVIDE TRAINING AND CERTIFICATION?",
    pannel: "pannel3",
    description:
      "We conduct our training programmes at our/your premises. A training certificate holds an international associates companies logos as well.",
  },
  {
    name: "WHAT SETS US APART FROM OTHER CONSULTANTS?",
    pannel: "pannel4",
    description:
      "We provide Free Initial Assessment to our potential clients. This helps us in going through your expectations and what direction you need to take.",
  },
  {
    name: "HOW DO WE INTEGRATE OUR METHOD INTO YOUR EXISTING STRUCTURE?",
    pannel: "pannel5",
    description:
      "Eliminate: what doesn’t contribute to the results or hold any necessity? Minimize: things that are necessary but do not significantly impact the results. Maintain: which already is existing and working, Implement changes and approaches needed for the progression of the defined process. Improve  Develop: things that are already in place or neglected, deliver a clear message and measurable results leading to achievement in the overall goal. Add: adding new elements to the processes and lead to the achievement of the breakthrough results and to maintain a positive sustainable development",
  },
  {
    name: "SHOULDN’T YOUR MANAGER / EMPLOYEES BE MASTER AT THIS?",
    pannel: "pannel6",
    description:
      "Yes, but it’s like going to the gym, everyone knows they should be able to. However very few actually go. It’s because they need a personal trainer or something to help you ensure it gets done and that you do it in the right way, with the right expectations and targets.",
  },
];
