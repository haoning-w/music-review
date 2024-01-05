import MiniStars from "@/components/MiniStars";
import Image from "next/image";
import Link from "next/link";
import { limitStrLen } from "@/utils/helper";
import { ALBUM_LARGE_TITLE_MAX_LEN } from "@/utils/constants";
import { getAlbum } from "@/service/apiSpotify";
import { ReviewBasicInfo } from "@/types/musicReviewType";

async function LibraryReviewItem({ item }: { item: ReviewBasicInfo }) {
  const album = await getAlbum(item.albumId);
  const subTitleStyle = "";

  return (
    <Link href={`/album/${album.id}`}>
      <li className="bg-color-white-3 flex flex-col p-4 text-color-dark-2 text-sm hover:cursor-pointer rounded-2xl hover:bg-color-white-4 transition duration-300 md:w-[80%] lg:w-full md:text-base">
        <div className="flex">
          <div className="w-[100px] md:w-[150px] lg:w-[200px]">
            <Image
              className="rounded-lg w-full"
              src={album.images[0].url}
              width={300}
              height={300}
              alt="album cover image"
            />
          </div>
          <div className="ml-4 flex flex-col justify-between w-[200px] md:w-full">
            <h1 className="font-bold text-base md:text-lg xl:text-xl">
              {limitStrLen(album.name, ALBUM_LARGE_TITLE_MAX_LEN)}
            </h1>
            <h1 className={subTitleStyle}>{album.artists[0].name}</h1>
            <h1 className={subTitleStyle}>{album.release_date}</h1>
          </div>
        </div>
        <div className="my-4">
          <div className="flex align-middle">
            <MiniStars rating={item.rating} />
            <p className="text-sm my-auto ml-2 text-color-dark-3 md:ml-4">
              {new Date(item.updatedAt!).toLocaleDateString()}
            </p>
          </div>
          <p className="text-sm mt-1">{item.content}</p>
        </div>
      </li>
    </Link>
  );
}

export default LibraryReviewItem;
