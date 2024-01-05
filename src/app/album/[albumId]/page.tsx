import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import AlbumDetailArea from "./AlbumDetailArea";
import { getReviewsByAlbum } from "@/service/apiMusicReview";
import { getAlbum } from "@/service/apiSpotify";
import ReviewList from "./ReviewList";
import { notFound } from "next/navigation";

async function page({ params }: { params: { albumId: string } }) {
  const queryClient = new QueryClient();
  const albumId = params.albumId;

  await queryClient.prefetchQuery({
    queryKey: ["albumReviews", albumId],
    queryFn: () => getReviewsByAlbum(albumId),
  });

  const albumData = await getAlbum(albumId);
  if (albumData.error) notFound();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="pt-8 lg:flex lg:justify-center lg:gap-12 xl:gap-32">
        <AlbumDetailArea album={albumData} />
        <ReviewList />
      </div>
    </HydrationBoundary>
  );
}

export default page;
