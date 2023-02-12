import * as React from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function SwipeableTextMobileStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div>
      <AutoPlaySwipeableViews
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 1 ? (
              <img
                className="lg:w-[200rem] lg:h-[60rem] overflow-hidden "
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <p className=" lg:absolute lg:top-[22rem] lg:ml-[20rem] lg:text-[5rem] font-bold text-[white]">
        {images[activeStep].label}
        <br />
        {images[activeStep].labe2}
      </p>
    </div>
  );
}

export default SwipeableTextMobileStepper;
const images = [
  {
    label: "Your Requirement ",
    labe2: " Our Commitment",
    imgPath: "./assests/Background/bg-1.jpg",
  },
  {
    label: "Experienced ",
    labe2: " Consultant",
    imgPath: "./assests/Background/bg-2.jpg",
  },
  {
    label: "Sustainable",
    labe2: " Creative Solutions",

    imgPath: "./assests/Background/bg-3.jpg",
  },
  {
    label: "Sustainable",
    labe2: " Sustainable",

    imgPath: "./assests/Background/bg-4.jpg",
  },
];
