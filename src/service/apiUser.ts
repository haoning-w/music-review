import {
  type UpdateUserInfoData,
  type UserBasicInfo,
  type UserFullInfo,
} from "@/types/userType";
import prisma from "@/utils/db";
import { getAccessToken, getSession } from "@auth0/nextjs-auth0";

async function getAuth0Id(): Promise<string> {
  const accessToken = await getAccessToken();
  const session = await getSession();
  if (!accessToken) {
    throw new Error("Please log in first!");
  }
  const user = session ? session.user : null;
  const auth0Id = user?.sub;
  return auth0Id;
}

export const getUserId = async (): Promise<number> => {
  const auth0Id = await getAuth0Id();
  const data = await prisma.user.findFirst({
    where: {
      auth0Id,
    },
  });
  return data!.id;
};

export const getUserLikesCount = async (): Promise<number> => {
  const userId = await getUserId();
  const result = await prisma.userReviewLikes.count({
    where: {
      userId,
    },
  });
  return result;
};

export async function getUserReviewsCount(): Promise<number> {
  const userId = await getUserId();
  const result: number = await prisma.review.count({
    where: {
      authorId: userId,
    },
  });
  return result;
}

export async function getUserInfo(): Promise<UserBasicInfo> {
  const auth0Id = await getAuth0Id();
  const data = await prisma.user.findFirst({
    where: {
      auth0Id,
    },
  });
  return data!;
}

export async function getUserFullInfo(): Promise<UserFullInfo> {
  const user = await getUserInfo();
  const likesCount = await getUserLikesCount();
  const reviewsCount = await getUserReviewsCount();
  return { name: user.name, email: user.email, likesCount, reviewsCount };
}

export async function updateUserInfo(data: UpdateUserInfoData) {
  const auth0Id = await getAuth0Id();
  await prisma.user.update({
    where: {
      auth0Id,
    },
    data,
  });
}

export async function createUser(data: UserBasicInfo) {
  const user = await prisma.user.findFirst({
    where: {
      auth0Id: data.auth0Id,
    },
  });

  if (user) {
    return;
  } else {
    await prisma.user.create({
      data,
    });
  }
}
