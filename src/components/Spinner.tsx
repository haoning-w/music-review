import { CircularProgress } from "@mui/material";

function Spinner({ size = 100 }) {
  return (
    <div className="h-full w-full flex">
      <CircularProgress
        className="mx-auto my-auto"
        size={size}
        style={{ color: "#22c55e" }}
      />
    </div>
  );
}

export default Spinner;
