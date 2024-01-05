"use client";

import StarRating from "@/components/StarRating";
import ReviewInput from "./ReviewInput";
import { useState } from "react";
import useMutateReview from "./useMutateReview";
import toast from "react-hot-toast";
import { useParams } from "next/navigation";

type ReviewFormProps = {
  initialRating?: number;
  initialReview?: string;
  isAuthenticated: boolean;
  reviewId?: number;
};

function ReviewForm({
  initialRating = 0,
  initialReview = "",
  isAuthenticated,
  reviewId,
}: ReviewFormProps) {
  const { albumId }: { albumId: string } = useParams();
  const [review, setReview] = useState(initialReview);
  const [rating, setRating] = useState(initialRating);
  const { mutateReview, isMutatingReview } = useMutateReview();

  function handleSubmit() {
    const method = Boolean(reviewId) ? "PATCH" : "POST";
    if (rating <= 0) {
      toast.error("Please choose your rating!");
      return;
    }
    if (!review) {
      toast.error("Please input your review!");
      return;
    }
    const reviewData = {
      rating,
      content: review,
      albumId,
      reviewId,
    };
    mutateReview({ reviewData, method, albumId });
  }

  return (
    <>
      <div className="mt-8">
        <StarRating
          rating={rating}
          setRating={setRating}
          isDisabled={isMutatingReview}
        />
      </div>
      <ReviewInput
        review={review}
        setReview={setReview}
        isDisabled={isMutatingReview}
      />
      <div className="flex justify-center mt-4">
        <button
          className={
            "bg-green-500 px-4 py-2 rounded-full hover:bg-green-400 transtion duration-300" +
            (isMutatingReview ? " cursor-not-allowed" : "")
          }
          disabled={isMutatingReview}
          onClick={isAuthenticated ? handleSubmit : () => {}}
        >
          {isMutatingReview ? "Submitting..." : "Submit"}
        </button>
      </div>
    </>
  );
}

export default ReviewForm;
