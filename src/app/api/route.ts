import { getSpotifyToken } from "@/service/apiSpotify";
import { NextResponse } from "next/server";

export const POST = async function () {
  const token = await getSpotifyToken();
  return NextResponse.json(token);
};
