"use client";

import { useQuery } from "@tanstack/react-query";
import ReviewItem from "./ReviewItem";
import { useParams } from "next/navigation";
import { getReviewsByAlbum } from "@/service/apiMusicReview";

function ReviewsList() {
  const params = useParams();
  const albumId = params.albumId as string;
  const { data: reviewData } = useQuery({
    queryKey: ["albumReviews", albumId],
    queryFn: () => getReviewsByAlbum(albumId),
  });

  return (
    <div className="w-[340px] xl:w-[360px] mx-auto lg:mx-0">
      <h1 className="text-green-700 px-2 mx-auto mt-4 pt-2 font-bold sm:text-lg lg:text-xl lg:mb-2 lg:px-0 lg:mx-2">
        Reviews
      </h1>
      <ul className="mx-auto overflow-auto h-[700px] mt-2">
        {reviewData!.length === 0 && (
          <h1 className="px-2 py-2 mt-2 bg-green-50 rounded-2xl">
            There is no review yet ...
          </h1>
        )}
        {reviewData!.map((item) => (
          <ReviewItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default ReviewsList;
