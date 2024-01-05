import { getUserId } from "@/service/apiUser";
import prisma from "@/utils/db";
import { withApiAuthRequired } from "@auth0/nextjs-auth0";
import { NextResponse } from "next/server";

export const POST = withApiAuthRequired(async function (req, { params }) {
  const res = new NextResponse();
  const data = await req.json();
  const { rating, content } = data;

  const albumId = params!.albumId as string;
  const userId = await getUserId();

  const newReview = await prisma.review.create({
    data: {
      authorId: userId,
      rating,
      content,
      albumId,
    },
  });

  return NextResponse.json(newReview, res);
});

export const PATCH = withApiAuthRequired(async function (req, { params }) {
  const res = new NextResponse();
  const data = await req.json();
  const { rating, content, reviewId } = data;

  const newReview = await prisma.review.update({
    where: {
      id: reviewId,
    },
    data: {
      rating,
      content,
    },
  });

  return NextResponse.json(newReview, res);
});
