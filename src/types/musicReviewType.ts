import { type UserBasicInfo } from "./userType";

export interface ReviewBasicInfo {
  id?: number;
  updatedAt?: string;
  rating: number;
  albumId: string;
  content: string;
  authorId?: number;
  author?: UserBasicInfo;
}

export interface ReviewFullInfo extends ReviewBasicInfo {
  userLike: boolean;
  likeCount: number;
}
