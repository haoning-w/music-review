import { type ReviewBasicInfo } from "@/types/musicReviewType";

export async function mutateLikeReview({
  reviewId,
  method,
}: {
  reviewId: number;
  method: string;
}): Promise<void> {
  await fetch(`/api/reviewAction/${reviewId}`, {
    method,
  });
}

export async function mutateReview({
  reviewData,
  method,
  albumId,
}: {
  reviewData: { rating: number; content: string };
  method: string;
  albumId: string;
}): Promise<ReviewBasicInfo> {
  const res = await fetch(`/api/albumReview/${albumId}`, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reviewData),
  });
  const data = await res.json();
  return data;
}
