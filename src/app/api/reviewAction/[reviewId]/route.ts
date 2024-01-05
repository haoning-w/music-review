import { getUserId } from "@/service/apiUser";
import prisma from "@/utils/db";
import { withApiAuthRequired } from "@auth0/nextjs-auth0";
import { NextResponse } from "next/server";

export const POST = withApiAuthRequired(async function (req, { params }) {
  const res = new NextResponse();
  const reviewId = Number(params!.reviewId as string);
  const userId = await getUserId();
  await prisma.userReviewLikes.create({
    data: {
      reviewId,
      userId,
    },
  });
  return NextResponse.json("success", res);
});

export const DELETE = withApiAuthRequired(async function (req, { params }) {
  const res = new NextResponse();
  const reviewId = Number(params!.reviewId as string);
  const userId = await getUserId();
  await prisma.userReviewLikes.deleteMany({
    where: {
      reviewId,
      userId,
    },
  });
  return NextResponse.json("success", res);
});
