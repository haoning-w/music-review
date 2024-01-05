import { redirect } from "next/navigation";

function page() {
  redirect("/home");
  return <div></div>;
}

export default page;
