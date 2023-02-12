import React from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";

const Rating = ({ RatingValue }) => {
  return (
    <div className="text-center text-[#c1d646] opacity-80">
      <span>
        {RatingValue >= 1 ? (
          <StarBorderIcon />
        ) : RatingValue >= 0.5 ? (
          <StarHalfIcon />
        ) : (
          <StarBorderIcon />
        )}
      </span>
      <span>
        {RatingValue >= 2 ? (
          <StarBorderIcon />
        ) : RatingValue >= 1.5 ? (
          <StarHalfIcon />
        ) : (
          <StarBorderIcon />
        )}
      </span>
      <span>
        {RatingValue >= 3 ? (
          <StarBorderIcon />
        ) : RatingValue >= 2.5 ? (
          <StarHalfIcon />
        ) : (
          <StarBorderIcon />
        )}
      </span>
      <span>
        {RatingValue >= 4 ? (
          <StarBorderIcon />
        ) : RatingValue >= 3.5 ? (
          <StarHalfIcon />
        ) : (
          <StarBorderIcon />
        )}
      </span>
      <span>
        {RatingValue >= 5 ? (
          <StarBorderIcon />
        ) : RatingValue >= 4.5 ? (
          <StarHalfIcon />
        ) : (
          <StarBorderIcon />
        )}
      </span>
    </div>
  );
};

export default Rating;
