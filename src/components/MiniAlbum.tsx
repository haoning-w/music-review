import { type AlbumDefaultInfo } from "@/types/albumType";
import {
  ALBUM_LARGE_TITLE_MAX_LEN,
  ALBUM_SMALL_TITLE_MAX_LEN,
} from "@/utils/constants";
import { limitStrLen } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";

function MiniAlbum({
  size = "small",
  albumId,
  img,
  title,
  subTitleRight,
  subTitleLeft,
}: AlbumDefaultInfo) {
  const titleSize =
    size === "small" ? "text-sm md:text-lg font-bold" : "text-lg sm:text-xl";
  const subTitleSize =
    size === "small" ? "text-xs sm:text-sm md:text-base" : "text-md sm:text-lg";

  return (
    <Link href={`/album/${albumId}`}>
      <div
        className={
          "h-[100%] w-[100%] bg-color-white-3 px-2 py-4 mt-4 rounded-xl hover:bg-color-white-4 transition duration-300" +
          (size === "small" ? " hover:cursor-pointer" : "")
        }
      >
        <div className="w-[100%]">
          <Image
            className="w-[100%] rounded-md"
            src={img}
            alt="Album's image"
            height={300}
            width={300}
            priority
          />
        </div>
        <h1 className={`ml-2 mt-2 md:mt-4 text-color-dark-2 py-2 ${titleSize}`}>
          {limitStrLen(
            title,
            size === "small"
              ? ALBUM_SMALL_TITLE_MAX_LEN
              : ALBUM_LARGE_TITLE_MAX_LEN
          )}
        </h1>
        <p className={`ml-2 text-color-dark-2 ${subTitleSize}`}>
          {subTitleLeft} - {subTitleRight}
        </p>
      </div>
    </Link>
  );
}

export default MiniAlbum;
