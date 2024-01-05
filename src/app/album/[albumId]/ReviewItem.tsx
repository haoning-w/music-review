"use client";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import toast from "react-hot-toast";
import { useParams } from "next/navigation";
import MiniStars from "@/components/MiniStars";
import useMutateLikeReview from "./useMutateLikeReview";
import { useUser } from "@auth0/nextjs-auth0/client";
import { type ReviewFullInfo } from "@/types/musicReviewType";

const fontSizeLastLine = "text-xs";

function ReviewItem({ item }: { item: ReviewFullInfo }) {
  const method = item.userLike ? "DELETE" : "POST";
  const { albumId }: { albumId: string } = useParams();
  const { user } = useUser();
  const { mutateLikeReview, isMutatingLikeReview } = useMutateLikeReview(
    item.id!,
    method,
    albumId
  );

  const isAuthenticated = Boolean(user);

  function handleLike() {
    mutateLikeReview();
  }

  return (
    <li className="px-4 mt-4 mx-2 py-2 last:mb-12 bg-green-50 rounded-2xl">
      <div className="flex align-middle justify-between gap-2">
        <h1 className="my-auto text-base">{item.author!.name}</h1>
        <MiniStars rating={item.rating} />
      </div>
      <p className="py-2">{item.content}</p>
      <div className="mt-2 flex align-middle justify-between">
        <h3 className={fontSizeLastLine}>
          {new Date(item.updatedAt!).toLocaleString()}
        </h3>
        <div
          className="flex align-middle hover:cursor-pointer"
          onClick={
            isAuthenticated
              ? isMutatingLikeReview
                ? () => {}
                : handleLike
              : () => toast("Please log in first!", { icon: "👋" })
          }
        >
          {item.userLike ? (
            <FavoriteOutlinedIcon style={{ color: "red", fontSize: "16px" }} />
          ) : (
            <FavoriteBorderOutlinedIcon style={{ fontSize: "16px" }} />
          )}
          <p className={fontSizeLastLine + " ml-2"}>{item.likeCount}</p>
        </div>
      </div>
    </li>
  );
}

export default ReviewItem;
