"use client";

import { getUserFullInfo } from "@/service/apiUser";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useState } from "react";
import { updateUserInfo } from "@/service/clientApiUser";
import { type UpdateUserInfoData } from "@/types/userType";

function ProfileForm() {
  const queryClient = new QueryClient();
  const { data: userInfo } = useQuery({
    queryKey: ["user-full-info"],
    queryFn: getUserFullInfo,
  });
  const { mutate, isPending } = useMutation({
    mutationFn: (data: UpdateUserInfoData) => updateUserInfo(data),
    onSuccess: (data) => {
      toast.success("Successfully updated your profile!");
      queryClient.setQueryData(["user-full-info"], (old: Object) => ({
        ...old,
        name: data,
      }));
    },
    onError: (err) => toast.error(err.message),
  });
  const [name, setName] = useState<string>(userInfo!.name);

  async function handleSubmit() {
    if (name === "") {
      toast.error("Name can't be empty!");
      return;
    }
    const data = { name: name };
    mutate(data);
  }

  const labelStyle = "inline-block my-auto w-1/4 lg:text-xl";
  return (
    <div className="text-base ml-1 mt-2">
      <form className="mt-4 lg:w-[600px] lg:mt-8">
        <div className="w-full flex gap-4">
          <label htmlFor="email" className={labelStyle}>
            Email
          </label>
          <input
            id="email"
            name="email"
            value={userInfo?.email}
            readOnly
            className="bg-color-white-4 w-3/4 px-4 py-2 hover:cursor-not-allowed rounded-2xl"
          />
        </div>
        <div className="mt-4 flex gap-4 lg:mt-8">
          <label htmlFor="name" className={labelStyle}>
            Name
          </label>
          <input
            id="name"
            name="name"
            defaultValue={userInfo?.name}
            className={"bg-color-white-1 w-3/4 px-4 py-2 rounded-2xl"}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="w-full flex justify-center mt-4">
          <button
            onClick={handleSubmit}
            className={
              "bg-green-500 px-4 py-2 rounded-full hover:bg-green-400 transtion duration-300 sm:mt-4" +
              (isPending ? " cursor-not-allowed" : "")
            }
            type="button"
          >
            {isPending ? "Submiting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProfileForm;
