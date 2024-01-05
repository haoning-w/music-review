export interface UserBasicInfo {
  name: string;
  email: string;
  auth0Id?: string;
}

export interface UserFullInfo extends UserBasicInfo {
  likesCount: number;
  reviewsCount: number;
}

export interface UpdateUserInfoData extends Partial<UserFullInfo> {}
