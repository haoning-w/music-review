import AlbumsDisplay from "@/components/AlbumsDisplay";
import { getNewReleases } from "@/service/apiSpotify";

async function HomePage() {
  const newReleases = await getNewReleases();
  return <AlbumsDisplay pageTitle="New Releases" albumsData={newReleases} />;
}

export default HomePage;
