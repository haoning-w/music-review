"use client";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useRouter } from "next/navigation";

function SearchBar() {
  const router = useRouter();
  function handleSearch(keyword: string) {
    if (!keyword) {
      router.replace("/home");
      return;
    }
    router.replace(`/search/${keyword}`);
  }

  return (
    <div className="h-12 flex items-center relative mb-4 text-color-dark-1 px-5 sm:px-2 md:px-0">
      <SearchOutlinedIcon style={{ position: "absolute", margin: "14px" }} />
      <input
        className="pl-11 py-2 rounded-lg mx-auto w-full"
        type="text"
        placeholder="Search..."
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
