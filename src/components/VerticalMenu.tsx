import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import MiniProfile from "./MiniProfile";
import { getSession } from "@auth0/nextjs-auth0";
import MenuList from "./MenuList";

async function VerticalMenu() {
  const session = await getSession();

  const liStyle =
    "px-3 py-2 hover:cursor-pointer hover:bg-slate-300 transition duration-300 flex align-middle mb-2 rounded-full";

  return (
    <div className="hidden w-[300px] lg:w-[350px] xl:w-[400px] px-6 xl:px-12 h-[100vh] bg-color-white-3 border-r-2 border-gray-100 sm:block overflow-auto">
      <div className="mt-10 lg:mt-24">
        <MiniProfile />
      </div>
      <MenuList direction="vertical" />
      {Boolean(session) && (
        <a href="/api/auth/logout">
          <div className={liStyle}>
            <LogoutOutlinedIcon className="mr-2" />
            Log Out
          </div>
        </a>
      )}
    </div>
  );
}

export default VerticalMenu;
