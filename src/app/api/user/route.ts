import { getUserId } from "@/service/apiUser";
import prisma from "@/utils/db";
import { withApiAuthRequired } from "@auth0/nextjs-auth0";
import { NextResponse } from "next/server";

export const PATCH = withApiAuthRequired(async function (req) {
  const res = new NextResponse();
  const userId = await getUserId();
  const body = await req.json();

  const data = await prisma.user.update({
    where: {
      id: userId,
    },
    data: body,
  });
  return NextResponse.json(data.name, res);
});
