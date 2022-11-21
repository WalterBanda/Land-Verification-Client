import { PageBuilder } from "@components/index";
import { useAuth } from "@core/hooks/auth";
import { home, sections } from "@styles/index";

function ProfileSettings() {
  const { user } = useAuth()
  return <div>
    <p className={sections.header}> Profile Settings </p>
    <div>
      <div>
        <img src={user?.photoURL} alt="Profile Url" />
      </div>
      <div>
        <span>Profile Name</span>
        <p>{user?.displayName}</p>
      </div>
      <div>
        <i className="verifier-info" />
      </div>
    </div>
  </div>
}

export default function Index() {
  return (
    <div className={home.root}>
      <ProfileSettings />
    </div>
  );
}
Index.getLayout = function getLayout(page) {
  return <PageBuilder title="Settings">{page}</PageBuilder>;
};
