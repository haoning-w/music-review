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

// Generate some random reviews if an album has no review
// Just to demonstrate the website's functionality
const generateRandomReviews = (albumId: string, numReviews = 5) => {
  const sampleUsers = [
    { name: 'Alice', email: 'alice@example.com' },
    { name: 'Bob', email: 'bob@example.com' },
    { name: 'Charlie', email: 'charlie@example.com' },
    { name: 'Dana', email: 'dana@example.com' },
    { name: 'Eve', email: 'eve@example.com' },
    { name: 'Frank', email: 'frank@example.com' },
    { name: 'Grace', email: 'grace@example.com' }
  ];

  const openingPhrases = [
    "I recently listened to this album and",
    "This album really surprised me,",
    "Honestly,",
    "After hearing a few tracks,",
    "I've been listening to this album all week and",
    "From the first track,",
  ];

  const albumComments = [
    "it's absolutely fantastic.",
    "I think it's a bit overrated.",
    "I can't stop listening to it.",
    "it didn't quite meet my expectations.",
    "it's an amazing masterpiece.",
    "it has a few great tracks, but overall it's not for me.",
  ];

  const closingRemarks = [
    "Highly recommend it!",
    "Would definitely give it another listen.",
    "Probably won’t listen to it again.",
    "It's worth checking out if you enjoy this genre.",
    "I might come back to this one later.",
    "Not my favorite, but others might love it.",
  ];

  const sampleContent = [...Array(numReviews)].map(() => {
    const randomOpening = openingPhrases[Math.floor(Math.random() * openingPhrases.length)];
    const randomAlbumComment = albumComments[Math.floor(Math.random() * albumComments.length)];
    const randomClosing = closingRemarks[Math.floor(Math.random() * closingRemarks.length)];
    return `${randomOpening} ${randomAlbumComment} ${randomClosing}`;
  });

  return [...Array(numReviews)].map((_, i) => {
    const randomUser = sampleUsers[Math.floor(Math.random() * sampleUsers.length)];
    return {
      id: i + 1,  // Temporary ID
      albumId,
      rating: Math.floor(Math.random() * 5) + 1,  // Random rating from 1 to 5
      content: sampleContent[i],
      author: {
        name: randomUser.name,
        email: randomUser.email,  // Add email field to match expected structure
      },
      createdAt: new Date(),
      userLike: false,  // Default for fake reviews
      likeCount: 0,     // No likes for generated reviews
    };
  });
};

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

  if (data.length === 0) {
    const randomReviews = generateRandomReviews(albumId, 5);
    return randomReviews;
  }

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
