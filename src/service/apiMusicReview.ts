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

  // More reasonable distribution of comments based on rating
  const positiveComments = [
    "it's absolutely fantastic.",
    "I can't stop listening to it.",
    "it's an amazing masterpiece.",
    "the production quality is impressive.",
    "the lyrics are deeply meaningful.",
    "I'll add it to my playlist for sure."
  ];

  const neutralComments = [
    "it's a mixed bag with some highlights.",
    "it has a few great tracks, but overall it's not for me.",
    "the sound feels repetitive after a while.",
    "it didn't quite meet my expectations."
  ];

  const negativeComments = [
    "I think it's a bit overrated.",
    "I won't be revisiting this album.",
    "it's not as good as I expected."
  ];

  const closingRemarks = [
    "Highly recommend it!",
    "Would definitely give it another listen.",
    "Probably won’t listen to it again.",
    "It's worth checking out if you enjoy this genre.",
    "I might come back to this one later.",
    "Not my favorite, but others might love it."
  ];

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

  const positiveComments = [
    "it's absolutely fantastic.",
    "I can't stop listening to it.",
    "it's an amazing masterpiece.",
    "the production quality is impressive.",
    "the lyrics are deeply meaningful.",
    "I'll add it to my playlist for sure."
  ];

  const neutralComments = [
    "it's a mixed bag with some highlights.",
    "it has a few great tracks, but overall it's not for me.",
    "the sound feels repetitive after a while.",
    "it didn't quite meet my expectations."
  ];

  const negativeComments = [
    "I think it's a bit overrated.",
    "I won't be revisiting this album.",
    "it's not as good as I expected."
  ];

  const closingRemarks = [
    "Highly recommend it!",
    "Would definitely give it another listen.",
    "Probably won’t listen to it again.",
    "It's worth checking out if you enjoy this genre.",
    "I might come back to this one later.",
    "Not my favorite, but others might love it."
  ];

  // Function to generate review content based on the rating
  const generateReviewContent = (rating: number) => {
    let albumComment;
    if (rating >= 4) {
      albumComment = positiveComments[Math.floor(Math.random() * positiveComments.length)];
    } else if (rating === 3) {
      albumComment = neutralComments[Math.floor(Math.random() * neutralComments.length)];
    } else {
      albumComment = negativeComments[Math.floor(Math.random() * negativeComments.length)];
    }
    const randomClosing = closingRemarks[Math.floor(Math.random() * closingRemarks.length)];
    return `${albumComment} ${randomClosing}`;
  };

  // Function to generate a random date between 10 days ago and now
  const generateRandomDate = () => {
    const now = new Date();
    const tenDaysAgo = new Date(now);
    tenDaysAgo.setDate(now.getDate() - 10);

    const randomTimestamp = tenDaysAgo.getTime() + Math.random() * (now.getTime() - tenDaysAgo.getTime());
    return new Date(randomTimestamp).toISOString();
  };

  return [...Array(numReviews)].map((_, i) => {
    const randomUser = sampleUsers[Math.floor(Math.random() * sampleUsers.length)];
    const rating = Math.floor(Math.random() * 5) + 1;  // Random rating from 1 to 5
    const content = generateReviewContent(rating);  // Content based on rating
    const randomDate = generateRandomDate();  // Get a random date between 10 days ago and now

    return {
      id: i + 1,  // Temporary ID
      albumId,
      rating,  // Set rating
      content,  // Set review content based on rating
      author: {
        name: randomUser.name,
        email: randomUser.email,  // Add email field to match expected structure
      },
      createdAt: randomDate,  // Set random createdAt date
      updatedAt: randomDate,  // Set random updatedAt date
      userLike: false,  // Default for fake reviews
      likeCount: Math.floor(Math.random() * 100),  // Random like count between 0 and 99
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
