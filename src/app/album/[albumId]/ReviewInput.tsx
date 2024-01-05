"use client";

import { type Dispatch, type SetStateAction } from "react";

type InputProps = {
  review: string;
  setReview: Dispatch<SetStateAction<string>>;
  isDisabled: boolean;
};

function ReviewInput({ review, setReview, isDisabled }: InputProps) {
  const style =
    "h-[100%] w-[100%] border-amber-500 border-2 bg-color-white-2 text-color-dark-2 px-2 py-1 resize-none" +
    (isDisabled ? " cursor-not-allowed" : "");
  return (
    <div className="w-[300px] mx-auto h-24 md:h-30 lg:h-36 xl:h-48">
      <textarea
        disabled={isDisabled}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Input your review here"
        value={review}
        className={style}
      />
    </div>
  );
}

export default ReviewInput;
