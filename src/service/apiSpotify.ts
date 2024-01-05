import {
  type AlbumsListData,
  type AlbumItemData,
} from "@/types/sporifyDataType";
import {
  tokenRequestUrl,
  albumRequestUrl,
  newRealeasesUrl,
} from "@/utils/constants";
import prisma from "@/utils/db";

export async function getSpotifyToken(): Promise<string> {
  const rawToken = await prisma.spotifyToken.findFirst();
  if (rawToken) {
    const isTokenValid =
      Date.now() - Number(rawToken.updatedAt) < 60 * 50 * 1000;
    if (isTokenValid) return rawToken.token;
  }
  const body = new URLSearchParams({
    grant_type: "client_credentials",
    client_id: process.env.SPOTIFY_CLIENT_ID!,
    client_secret: process.env.SPOTIFY_CLIENT_SECRET!,
  });
  const res = await fetch(tokenRequestUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  });
  const { access_token } = await res.json();
  if (!rawToken) {
    await prisma.spotifyToken.create({
      data: {
        token: access_token,
      },
    });
  } else {
    await prisma.spotifyToken.update({
      where: { id: rawToken.id },
      data: { token: access_token },
    });
  }
  return access_token;
}

export async function getAlbum(id: string): Promise<AlbumItemData> {
  const token = await getSpotifyToken();
  const res = await fetch(`${albumRequestUrl}${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  return data;
}

export async function getNewReleases(): Promise<AlbumsListData> {
  const token = await getSpotifyToken();
  const res = await fetch(newRealeasesUrl, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  return data;
}

export async function searchSpotify({
  keyword,
  type = "album",
}: {
  keyword: string;
  type?: string;
}): Promise<AlbumsListData | undefined> {
  // const exampleUrl = "https://api.spotify.com/v1/search?q=qingfeng+wu&type=album&offset=0"
  try {
    const token = await getSpotifyToken();
    const queryString = encodeURIComponent(keyword);
    const url = `https://api.spotify.com/v1/search?q=${queryString}&type=${type}&offset=0`;
    const { signal } = new AbortController();
    const res = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      signal,
    });
    const data = await res.json();
    return data;
  } catch (err) {
    if (err instanceof DOMException && err.name === "AbortError") return;
  }
}
