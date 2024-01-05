import { useMutation } from "@tanstack/react-query";
import { mutateReview as mutateReviewApi } from "@/service/clientApiReview";
import toast from "react-hot-toast";
import { ReviewBasicInfo } from "@/types/musicReviewType";

type Params = {
  reviewData: ReviewBasicInfo;
  method: "POST" | "PATCH";
  albumId: string;
};

function useMutateReview() {
  const { mutate: mutateReview, isPending: isMutatingReview } = useMutation({
    mutationFn: ({ reviewData, method, albumId }: Params) =>
      mutateReviewApi({ reviewData, method, albumId }),
    onSuccess: () => {
      toast.success("Successfully submitted!");
    },
    onError: (err) => toast.error(err.message),
  });
  return { mutateReview, isMutatingReview };
}

export default useMutateReview;
