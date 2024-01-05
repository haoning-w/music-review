"use client";

import Button from "./Button";
import Image from "next/image";
import { getUserFullInfo } from "@/service/apiUser";
import { useQuery } from "@tanstack/react-query";

function MiniProfile() {
  const { data: userFullInfo } = useQuery({
    queryKey: ["user-full-info"],
    queryFn: getUserFullInfo,
  });

  const { reviewsCount = -1, likesCount = -1 } = userFullInfo || {};

  const contentStyle = "text-center";
  return (
    <div className="text-color-dark-2">
      <div className="w-1/2 mx-auto">
        <Image
          src="/default_user.jpg"
          alt="user's profile photo"
          className="rounded-full"
          width={300}
          height={300}
          priority
        />
      </div>
      {Boolean(userFullInfo) ? (
        <div className="grid grid-cols-2 gap-4 my-4">
          <p className={contentStyle + " col-span-2"}>{userFullInfo?.name}</p>
          <p className={contentStyle}>
            {reviewsCount} {reviewsCount > 1 ? "reviews" : "review"}
          </p>
          <p className={contentStyle}>{likesCount} likes</p>
        </div>
      ) : (
        <div className="flex align-middle justify-center py-6 gap-2">
          <a href="/api/auth/login">
            <Button>Log In</Button>
          </a>
          <a href="/api/auth/login">
            <Button type="secondary">Sign Up</Button>
          </a>
        </div>
      )}
    </div>
  );
}

export default MiniProfile;
