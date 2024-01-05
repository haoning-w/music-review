import { type UpdateUserInfoData, type UserBasicInfo } from "@/types/userType";

export async function updateUserInfo(
  formData: UpdateUserInfoData
): Promise<UserBasicInfo> {
  const res = await fetch(`/api/user`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  const data = await res.json();
  return data;
}
