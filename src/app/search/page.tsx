import { redirect } from "next/navigation";

function Page() {
  redirect("/home");
  return <div></div>;
}

export default Page;
