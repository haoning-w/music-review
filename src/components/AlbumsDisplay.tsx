import { defaultAlbumInfo } from "@/utils/helper";
import PageFrame from "./PageFrame";
import MiniAlbum from "./MiniAlbum";
import { type AlbumsListData } from "@/types/sporifyDataType";

type AlbumsDisplayProps = {
  pageTitle: string;
  albumsData?: AlbumsListData;
};

function AlbumsDisplay({ pageTitle, albumsData }: AlbumsDisplayProps) {
  return (
    <PageFrame>
      <h1 className="pl-4 xl:pl-8">{pageTitle}</h1>
      {(!albumsData || albumsData.albums.items.length === 0) && (
        <div className="mt-4 ml-8">There is no album data.</div>
      )}
      <div className="grid grid-cols-2 gap-x-2 gap-y-6 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 md:mt-4">
        {albumsData &&
          albumsData.albums.items.map((album) => (
            <div
              className="mx-auto h-[260px] w-[144px] md:h-[340px] md:w-[180px]"
              key={album.id}
            >
              <MiniAlbum {...defaultAlbumInfo(album)} />
            </div>
          ))}
      </div>
    </PageFrame>
  );
}

export default AlbumsDisplay;
