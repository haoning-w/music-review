import { AlbumDefaultInfo } from "@/types/albumType";
import { AlbumItemData } from "@/types/sporifyDataType";

export function defaultAlbumInfo(album: AlbumItemData): AlbumDefaultInfo {
  const albumId = album.id;
  const subTitleRight = album.artists[0].name;
  const img = album.images.find((item) => item.height === 640)!.url;
  const title = album.name;
  const subTitleLeft = album.release_date.slice(0, 4);
  return { albumId, subTitleRight, img, title, subTitleLeft };
}

export function limitStrLen(str: string, len: number) {
  if (str.length >= len - 3) {
    str = str.slice(0, len - 3) + "...";
  }
  return str;
}
