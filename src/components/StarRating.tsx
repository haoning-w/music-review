import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

const starStyle = { color: "#f59e0b", fontSize: "42px" };

type StarRatingProps = {
  rating?: number;
  setRating: (rating: number) => void;
  isDisabled: boolean;
};

function StarRating({ rating = 0, setRating, isDisabled }: StarRatingProps) {
  const starContainerStyle =
    "inline-block " +
    (isDisabled ? "cursor-not-allowed" : "hover:cursor-pointer");
  return (
    <div className="px-8 py-2 my-4 w-full rounded-2xl bg-color-white-2 hover:bg-color-white-3 transition duration-300 block">
      <div className="flex align-middle justify-around">
        {Array.from({ length: 5 }, (_, i) => {
          return (
            <div
              key={i + 1}
              className={starContainerStyle}
              onClick={isDisabled ? () => {} : () => setRating(i + 1)}
            >
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

export default StarRating;
