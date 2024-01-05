import prisma from "@/utils/db";
import { getUserId } from "./apiUser";
import {
  type ReviewBasicInfo,
  type ReviewFullInfo,
} from "@/types/musicReviewType";

async function countReviewLikes(reviewId: number): Promise<number> {
  const amount = await prisma.userReviewLikes.count({
    where: {
      reviewId: reviewId,
    },
  });
  return amount;
}

async function reviewWithLikeData(
  review: ReviewBasicInfo,
  userId: number | string
): Promise<ReviewFullInfo> {
  let userLikeData;
  if (userId === "guest") {
    userLikeData = false;
  } else {
    userLikeData = await prisma.userReviewLikes.findFirst({
      where: {
        reviewId: review.id,
        userId: Number(userId),
      },
    });
  }

  const likeCount = await countReviewLikes(review.id!);
  return { ...review, userLike: Boolean(userLikeData), likeCount };
}

export async function getAllReviewsByUser(): Promise<ReviewFullInfo[]> {
  const userId = await getUserId();
  const data: any = await prisma.review.findMany({
    where: {
      authorId: userId,
    },
  });

  const dataWithLikeData = await Promise.all(
    data.map((item: ReviewBasicInfo) => reviewWithLikeData(item, userId))
  );
  return dataWithLikeData;
}

export async function getReviewsByAlbum(
  albumId: string
): Promise<ReviewFullInfo[]> {
  let userId: number | string;
  try {
    userId = await getUserId();
  } catch (err) {
    userId = "guest";
  }
  const data: any = await prisma.review.findMany({
    where: {
      albumId,
    },
    include: {
      author: {
        select: {
          name: true,
        },
      },
    },
  });

  const dataWithLikeData = await Promise.all(
    data.map((item: ReviewBasicInfo) => reviewWithLikeData(item, userId))
  );

  return dataWithLikeData;
}

export async function getUserAlbumReview(
  albumId: string
): Promise<ReviewBasicInfo | void> {
  let userId: string | number = "guest";
  try {
    userId = await getUserId();
  } catch (err) {
    return;
  }
  const data: any = await prisma.review.findFirst({
    where: {
      authorId: userId,
      albumId: albumId,
    },
  });
  return data;
}
