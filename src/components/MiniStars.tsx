"use client";

import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

const starStyle = { color: "#f59e0b", fontSize: "16px" };

function MiniStars({ rating = 0 }) {
  const starContainerStyle = "inline-block ";
  return (
    <div className="my-auto">
      <div className="flex align-middle justify-around ">
        {Array.from({ length: 5 }, (_, i) => {
          return (
            <div key={i + 1} className={starContainerStyle}>
              {i + 1 <= rating ? (
                <StarRoundedIcon style={starStyle} />
              ) : (
                <StarOutlineRoundedIcon style={starStyle} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MiniStars;
