import AlbumsDisplay from "@/components/AlbumsDisplay";
import { searchSpotify } from "@/service/apiSpotify";

type QueryStringType = {
  params: {
    keyword: string;
  };
};

async function SearchResult({ params }: QueryStringType) {
  const keyword = params.keyword;
  const searchResults = await searchSpotify({ keyword });
  return (
    <AlbumsDisplay pageTitle="Search Results" albumsData={searchResults} />
  );
}

export default SearchResult;
