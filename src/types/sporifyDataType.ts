export interface AlbumItemData {
  id: string;
  name: string;
  artists: {
    name: string;
  }[];
  images: {
    url: string;
    height: number;
    width: number;
  }[];
  release_date: string;
  error?: string;
}

export interface AlbumsListData {
  albums: {
    items: AlbumItemData[];
  };
}
