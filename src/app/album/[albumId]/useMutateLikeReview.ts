import { mutateLikeReview as mutateLikeReviewApi } from "@/service/clientApiReview";
import { type ReviewFullInfo } from "@/types/musicReviewType";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function useMutateLikeReview(
  reviewId: number,
  method: string,
  albumId: string
) {
  const queryClient = useQueryClient();
  const { mutate: mutateLikeReview, isPending: isMutatingLikeReview } =
    useMutation({
      mutationFn: () => mutateLikeReviewApi({ reviewId, method }),
      onMutate: () => {
        queryClient.setQueryData(
          ["albumReviews", albumId],
          (data: ReviewFullInfo[]) => {
            data.forEach((item) =>
              item.id === reviewId
                ? ((item.userLike = !item.userLike),
                  method === "POST"
                    ? (item.likeCount += 1)
                    : (item.likeCount -= 1))
                : null
            );
          }
        );
      },
    });
  return { mutateLikeReview, isMutatingLikeReview };
}

export default useMutateLikeReview;
