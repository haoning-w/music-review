import PageFrame from "@/components/PageFrame";
import ProfileForm from "./ProfileForm";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default withPageAuthRequired(async function ProfilePage() {
  return (
    <PageFrame>
      <h1 className="pl-1">Profile</h1>
      <ProfileForm />
    </PageFrame>
  );
});
