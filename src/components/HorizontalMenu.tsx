"use client";

import { type RefObject, useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Button } from "@mui/material";
import { useUser } from "@auth0/nextjs-auth0/client";
import useOutsideClick from "@/hooks/useOutsideClick";
import MenuList from "./MenuList";

const menuIconStyle = { height: "100%", cursor: "pointer" };

function HorizontalMenu() {
  const { user } = useUser();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useOutsideClick(() => setIsOpen(false));

  return (
    <div
      className="flex justify-between align-middle h-11 bg-slate-300 px-6 relative sm:hidden"
      ref={ref as RefObject<HTMLDivElement>}
    >
      <div onClick={() => setIsOpen((isOpen) => !isOpen)}>
        {isOpen ? (
          <CloseRoundedIcon color="primary" style={menuIconStyle} />
        ) : (
          <MenuRoundedIcon color="primary" style={menuIconStyle} />
        )}
      </div>
      {isOpen && (
        <div className="absolute left-0 top-full bg-slate-300 shadow-lg w-[100%] z-30">
          <MenuList direction="horizontal" setIsOpen={setIsOpen} />
        </div>
      )}
      <a href="/api/auth/login" className="my-auto">
        <Button style={{ textTransform: "none", fontSize: "16px" }}>
          {Boolean(user) ? "Log Out" : "Log In"}
        </Button>
      </a>
    </div>
  );
}

export default HorizontalMenu;
