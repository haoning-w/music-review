"use client";

import SearchBar from "@/app/search/SearchBar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import Link from "next/link";

type MenuListProps = {
  direction: "vertical" | "horizontal";
  setIsOpen?: (isOpen: boolean) => void;
};

function MenuList({ direction, setIsOpen }: MenuListProps) {
  const liStyle =
    direction === "vertical"
      ? "px-3 py-2 hover:cursor-pointer hover:bg-slate-300 transition duration-300 flex align-middle mb-2 rounded-full"
      : "px-6 py-2 hover:cursor-pointer hover:bg-slate-400 transition duration-300";

  return (
    <>
      {direction === "vertical" && <SearchBar />}
      <ul>
        <Link
          href="/profile"
          onClick={() => (setIsOpen ? setIsOpen(false) : null)}
        >
          <li className={liStyle}>
            <AccountBoxOutlinedIcon className="mr-2" />
            Profile
          </li>
        </Link>
        <Link
          href="/home"
          onClick={() => (setIsOpen ? setIsOpen(false) : null)}
        >
          <li className={liStyle}>
            <HomeOutlinedIcon className="mr-2" />
            Home
          </li>
        </Link>
        <Link
          href="/library"
          onClick={() => (setIsOpen ? setIsOpen(false) : null)}
        >
          <li className={liStyle}>
            <LibraryMusicOutlinedIcon className="mr-2" />
            Library
          </li>
        </Link>
      </ul>
      {direction === "horizontal" && <SearchBar />}
    </>
  );
}

export default MenuList;
