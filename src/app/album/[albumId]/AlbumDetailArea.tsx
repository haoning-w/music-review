import MiniAlbum from "@/components/MiniAlbum";
import ReviewForm from "./ReviewForm";
import { defaultAlbumInfo } from "@/utils/helper";
import { getUserAlbumReview } from "@/service/apiMusicReview";
import { getSession } from "@auth0/nextjs-auth0";
import { AlbumItemData } from "@/types/sporifyDataType";

async function AlbumDetailArea({ album }: { album: AlbumItemData }) {
  const session = await getSession();
  const userReview = await getUserAlbumReview(album.id);

  const isAuthenticated = Boolean(session?.user);
  return (
    <div className="relative px-2 py-4 lg:px-6 w-[340px] lg:w-auto mx-auto lg:mx-0">
      {!isAuthenticated && (
        <div className="absolute inset-0 bg-gray-800 bg-opacity-80 z-10 rounded-2xl flex justify-center items-center">
          <h1 className="text-color-white-1 text-2xl text-center px-2">
            To submit your review, please log in.
          </h1>
        </div>
      )}
      <div className="flex justify-center w-[288px] h-[420px] mb-4 mx-auto">
        <MiniAlbum size="large" {...defaultAlbumInfo(album)} />
      </div>
      <ReviewForm
        initialRating={userReview?.rating}
        initialReview={userReview?.content}
        isAuthenticated={Boolean(session?.user)}
        reviewId={userReview?.id}
      />
    </div>
  );
}

export default AlbumDetailArea;
