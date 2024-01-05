import PageFrame from "@/components/PageFrame";
import { getAllReviewsByUser } from "@/service/apiMusicReview";
import LibraryReviewItem from "./LibraryReviewItem";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default withPageAuthRequired(async function LibraryPage() {
  const userReviews = await getAllReviewsByUser();
  return (
    <PageFrame>
      <h1 className="pl-1">Your Reviews</h1>
      <ul className="flex flex-col gap-4 mt-4 md:mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
        {userReviews.map((item) => (
          <LibraryReviewItem key={item.id} item={item} />
        ))}
      </ul>
    </PageFrame>
  );
});
